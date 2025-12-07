
import pandas as pd
from flask import Flask, jsonify, request
import kagglehub
import json
from flask_cors import CORS
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# --- Kaggle Data Loading and Processing ---
try:
    print("Loading dataset from Kaggle Hub...")
    # Load the movies dataset file from the Kaggle dataset
    df = kagglehub.load_dataset(
        "raghavraipuria/tmdb-movie-dataset",
        "tmdb_5000_movies.csv",
    )
    print("Dataset loaded successfully.")

    # --- Data Cleaning and Pre-processing ---
    print("Starting data cleaning and pre-processing...")
    
    # Fill NaN (empty) values to prevent errors
    df['genres'].fillna('[]', inplace=True)
    df['keywords'].fillna('[]', inplace=True)
    df['title'].fillna('', inplace=True)

    def extract_names(json_str):
        """Extracts the 'name' values from a JSON string."""
        try:
            items = json.loads(json_str)
            return ', '.join([item['name'] for item in items])
        except (json.JSONDecodeError, TypeError):
            return ''

    # Create new columns with comma-separated names for genres and keywords
    df['genre_names'] = df['genres'].apply(extract_names)
    df['keyword_names'] = df['keywords'].apply(extract_names)
    
    df["release_date"] = pd.to_datetime(df["release_date"], errors="coerce")
    
    print("Data cleaning and pre-processing complete.")
    
except Exception as e:
    print(f"FATAL: Error loading or processing dataset from Kaggle Hub: {e}")
    print("Please ensure you have configured your Kaggle API credentials.")
    df = pd.DataFrame()


# --- ML Model Training ---
try:
    # Load the local dataset for model training
    model_data = pd.read_csv("movie_data.csv")

    # Preprocessing: Convert categorical variables to numerical
    model_data = pd.get_dummies(model_data, columns=['genre'], drop_first=True)

    # Define features (X) and target (y)
    features = ['budget', 'director_rating', 'genre_Comedy', 'genre_Drama', 'genre_Horror', 'genre_Sci-Fi', 'genre_Thriller', 'genre_Romance', 'genre_Adventure', 'genre_Animation', 'genre_Crime', 'genre_Fantasy', 'genre_Mystery', 'genre_Family', 'genre_Biography', 'genre_History', 'genre_Musical', 'genre_War', 'genre_Western', 'genre_Sport']
    
    # Ensure all potential genre columns exist, fill with 0 if not
    for col in features:
        if col not in model_data.columns:
            model_data[col] = 0

    X = model_data[features]
    y = model_data['revenue']

    # Split and train the model
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = LinearRegression()
    model.fit(X_train, y_train)

    # Evaluate the model
    y_pred = model.predict(X_test)
    mae = mean_absolute_error(y_test, y_pred)
    print(f"Prediction Model Mean Absolute Error: {mae}")

except Exception as e:
    print(f"Error during model training: {e}")
    model = None


# --- API Endpoints ---

@app.route("/api/movies", methods=["GET"])
def get_movies():
    """API endpoint to get the most popular movies from Kaggle data."""
    if df.empty:
        return jsonify({"error": "Kaggle dataset not available"}), 500
    
    # Sort movies by popularity and return the top 50
    movies = df.sort_values(by="popularity", ascending=False).head(50).to_dict(orient="records")
    return jsonify(movies)


@app.route("/api/search", methods=["GET"])
def search_movies():
    """API endpoint to search for movies in Kaggle data."""
    if df.empty:
        return jsonify({"error": "Kaggle dataset not available"}), 500

    query = request.args.get("q", "").lower()
    if not query:
        return get_movies()  # Return popular movies if query is empty

    # Search title, genres, and keywords
    results = df[
        df["title"].str.lower().str.contains(query, na=False)
        | df["genre_names"].str.lower().str.contains(query, na=False)
        | df["keyword_names"].str.lower().str.contains(query, na=False)
    ].head(50).to_dict(orient="records")
    
    return jsonify(results)


@app.route("/api/predict", methods=["POST"])
def predict_movie_success():
    """API endpoint for movie success predictions using the trained model."""
    if not model:
        return jsonify({"error": "Model not available"}), 500

    try:
        data = request.get_json()
        print(f"Prediction requested for: {data}")

        # Prepare the input for the model
        input_data = pd.DataFrame([data])
        input_data = pd.get_dummies(input_data, columns=['genre'])
        
        # Ensure all feature columns are present and in the correct order
        for col in features:
            if col not in input_data.columns:
                input_data[col] = 0
        input_data = input_data[features]

        # --- Prediction Logic ---
        predicted_revenue = model.predict(input_data)[0]
        
        budget = data.get('budget', 0)
        roi = (predicted_revenue - budget) / budget if budget > 0 else 0
        score = min(max(int(predicted_revenue / 100000), 0), 100) # Scale revenue to a 0-100 score
        confidence = "high" if roi > 0.5 else "medium" if roi > 0 else "low"

        prediction = {
            "score": score,
            "revenue": round(predicted_revenue, 2),
            "roi": round(roi, 2),
            "confidence": confidence
        }
        return jsonify(prediction)

    except Exception as e:
        print(f"Error during prediction: {e}")
        return jsonify({"error": "Prediction failed"}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5001)

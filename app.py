
import pandas as pd
from flask import Flask, jsonify, request
import kagglehub
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# --- Data Loading and Processing ---
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
    print("Please ensure you have run 'pip install kagglehub[pandas-datasets] flask-cors' and have configured your Kaggle API credentials.")
    df = pd.DataFrame()


# --- API Endpoints ---

@app.route("/api/movies", methods=["GET"])
def get_movies():
    """API endpoint to get the most popular movies."""
    if df.empty:
        return jsonify({"error": "Dataset not available"}), 500
    
    # Sort movies by popularity and return the top 50
    movies = df.sort_values(by="popularity", ascending=False).head(50).to_dict(orient="records")
    return jsonify(movies)


@app.route("/api/search", methods=["GET"])
def search_movies():
    """API endpoint to search for movies."""
    if df.empty:
        return jsonify({"error": "Dataset not available"}), 500

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
    """API endpoint for movie success predictions (placeholder)."""
    data = request.get_json()
    print(f"Prediction requested for: {data}")
    
    # --- Placeholder for your ML Model ---
    # Replace this with your actual prediction logic.
    prediction = {"score": 88, "revenue": 650, "roi": 3.1, "confidence": "high"}
    return jsonify(prediction)


if __name__ == "__main__":
    app.run(debug=True, port=5001)

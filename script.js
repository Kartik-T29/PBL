// Movie data
        const movies = [
            {
                id: 1,
                title: "Pathaan",
                genre: "Action",
                year: 2023,
                rating: 8.2,
                budget: 250,
                prediction: 92,
                language: "Hindi",
                poster: "https://m.media-amazon.com/images/M/MV5BN2E1NTBkYzItMDBjMC00NTg2LWI5ZTItNjMxMjc4MWIxNTAzXkEyXkFqcGc@._V1_.jpg",
                cast: ["Shah Rukh Khan", "Deepika Padukone", "John Abraham"],
                director: "Siddharth Anand",
                boxOffice: 1050
            },
            {
                id: 2,
                title: "RRR",
                genre: "Action",
                year: 2022,
                rating: 8.8,
                budget: 550,
                prediction: 96,
                language: "Telugu",
                poster: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
                cast: ["Ram Charan", "Jr. NTR", "Alia Bhatt"],
                director: "S.S. Rajamouli",
                boxOffice: 1200
            },
            {
                id: 3,
                title: "Jawan",
                genre: "Action",
                year: 2023,
                rating: 8.5,
                budget: 300,
                prediction: 94,
                language: "Hindi",
                poster: "https://m.media-amazon.com/images/M/MV5BMGExNGI1NDktOWI2Mi00NDM3LWIxMmQtNTQxYTgzMzI0MTA1XkEyXkFqcGc@._V1_.jpg",
                cast: ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi"],
                director: "Atlee",
                boxOffice: 1148
            },
            {
                id: 4,
                title: "Oppenheimer",
                genre: "Drama",
                year: 2023,
                rating: 8.9,
                budget: 1000,
                prediction: 87,
                language: "English",
                poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
                cast: ["Cillian Murphy", "Robert Downey Jr.", "Emily Blunt"],
                director: "Christopher Nolan",
                boxOffice: 952
            },
            {
                id: 5,
                title: "Avatar: The Way of Water",
                genre: "Sci-Fi",
                year: 2022,
                rating: 9.1,
                budget: 2500,
                prediction: 89,
                language: "English",
                poster: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg",
                cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
                director: "James Cameron",
                boxOffice: 2300
            },
            {
                id: 6,
                title: "Spider-Man: No Way Home",
                genre: "Action",
                year: 2021,
                rating: 8.7,
                budget: 2000,
                prediction: 91,
                language: "English",
                poster: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
                cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
                director: "Jon Watts",
                boxOffice: 1921
            },
            {
                id: 7,
                title: "Baahubali 2",
                genre: "Action",
                year: 2017,
                rating: 8.2,
                budget: 250,
                prediction: 95,
                language: "Telugu",
                poster: "https://scontent.fidr4-1.fna.fbcdn.net/v/t39.30808-6/465136525_8989791521085657_6320337543160748508_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=Q-3F3NvO27YQ7kNvwHZ9Cwe&_nc_oc=Adky_hRyjZ-s9ACzH_9Q5qIqJRJfjKmqtXc5WRGBCVja9YkJqespKkKrhnd90ClejtcCoszzd6JKBY2b-esFrUrq&_nc_zt=23&_nc_ht=scontent.fidr4-1.fna&_nc_gid=VARMaC59Qhjko5m2WVnoOw&oh=00_AfkWV6aGr4ry7BNIdigaR8KN80rMl_Oe5PHeuVJdCboQ8Q&oe=6939B4A2",
                cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty"],
                director: "S.S. Rajamouli",
                boxOffice: 1810
            },
            {
                id: 8,
                title: "Dangal",
                genre: "Drama",
                year: 2016,
                rating: 8.4,
                budget: 70,
                prediction: 93,
                language: "Hindi",
                poster: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
                cast: ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra"],
                director: "Nitesh Tiwari",
                boxOffice: 2024
            }
        ];

        const upcomingMovies = [
            {
                id: 101,
                title: "King",
                genre: "Action",
                releaseDate: "2026-12-25",
                language: "Hindi",
                poster: "https://m.media-amazon.com/images/M/MV5BMTFkZDQxOTYtOTdiNC00MjY4LTg3ZTQtYjVlMWUxMzNkYTVkXkEyXkFqcGc@._V1_.jpg",
                cast: ["Shah Rukh Khan", "Suhana Khan", "Abhay Verma"],
                director: "Sujoy Ghosh",
                budget: 400,
                expectedPrediction: 88
            },
            {
                id: 102,
                title: "Pushpa 3",
                genre: "Action",
                releaseDate: "2028-04-21",
                language: "Telugu",
                poster: "https://d2lnbwhcsmj8tp.cloudfront.net/ianslive_watermark/202503173353123.jpeg",
                cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
                director: "Sukumar",
                budget: 500,
                expectedPrediction: 95
            },
            {
                id: 103,
                title: "Avengers: Secret Wars",
                genre: "Action",
                releaseDate: "2027-05-07",
                language: "English",
                poster: "https://m.media-amazon.com/images/M/MV5BYTQyZTQ5MWQtN2M4NC00YWQwLTg3ZTctM2JiZDE4NDBkZDJkXkEyXkFqcGc@._V1_.jpg",
                cast: ["Multiple Heroes"],
                director: "Russo Brothers",
                budget: 4000,
                expectedPrediction: 92
            },
            {
                id: 104,
                title: "Kalki 2898 AD - Part 2",
                genre: "Sci-Fi",
                releaseDate: "2026-05-15",
                language: "Telugu",
                poster: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/kalki-2898-ad-prabhas-part-2-shooting-30042599-3x4.jpeg?VersionId=md3vuSgiCkRcQjmBLe07a9fMIe2fuZiw",
                cast: ["Prabhas", "Deepika Padukone", "Amitabh Bachchan"],
                director: "Nag Ashwin",
                budget: 600,
                expectedPrediction: 90
            },
            {
                id: 105,
                title: "Don 3",
                genre: "Action",
                releaseDate: "2025-08-15",
                language: "Hindi",
                poster: "https://media5.bollywoodhungama.in/wp-content/uploads/2023/08/Don-3.jpg",
                cast: ["Ranveer Singh", "Kiara Advani"],
                director: "Farhan Akhtar",
                budget: 350,
                expectedPrediction: 85
            },
            {
                id: 106,
                title: "Brahmastra 2",
                genre: "Fantasy",
                releaseDate: "2026-12-25",
                language: "Hindi",
                poster: "https://fugitives.com/wp-content/uploads/2022/11/Brahmastra-Part-One-Character-Dev-Explained-2022-Fantasy-Action-Film.jpg",
                cast: ["Ranbir Kapoor", "Alia Bhatt", "Hrithik Roshan"],
                director: "Ayan Mukerji",
                budget: 450,
                expectedPrediction: 87
            }
        ];

        let filteredMovies = [...movies];

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            loadMovies();
            loadUpcomingMovies();
            startCountdownTimers();
        });

        // Load popular movies
        function loadMovies() {
            const moviesGrid = document.getElementById('moviesGrid');
            moviesGrid.innerHTML = '';

            filteredMovies.forEach(movie => {
                const card = document.createElement('div');
                card.className = 'movie-card';
                card.onclick = () => showMovieDetails(movie);

                card.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" 
                         onerror="this.src='https://via.placeholder.com/300x450/4A90E2/ffffff?text=${encodeURIComponent(movie.title)}';">
                    <div class="movie-info">
                        <h3>${movie.title}</h3>
                        <div class="movie-meta">
                            <span class="movie-genre">${movie.genre}</span>
                            <span class="movie-rating">⭐ ${movie.rating}</span>
                        </div>
                        <div class="prediction-badge">
                            🎯 ${movie.prediction}% Success Rate
                        </div>
                    </div>
                `;

                moviesGrid.appendChild(card);
            });
        }

        // Load upcoming movies
        function loadUpcomingMovies() {
            const upcomingGrid = document.getElementById('upcomingGrid');
            upcomingGrid.innerHTML = '';

            upcomingMovies.forEach(movie => {
                const card = document.createElement('div');
                card.className = 'upcoming-card';
                card.onclick = () => showUpcomingDetails(movie);

                const countdown = calculateCountdown(movie.releaseDate);

                card.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}" class="upcoming-poster"
                         onerror="this.src='https://via.placeholder.com/300x450/F7CAC9/ffffff?text=${encodeURIComponent(movie.title)}';">
                    <div class="upcoming-info">
                        <h3>${movie.title}</h3>
                        <div class="upcoming-meta">
                            <span class="upcoming-genre">${movie.genre}</span>
                            <span class="release-date">📅 ${formatDate(movie.releaseDate)}</span>
                        </div>
                        <div class="countdown" id="countdown-${movie.id}">
                            <span class="countdown-number">${countdown}</span>
                            <span>Days to Release</span>
                        </div>
                        <div class="coming-soon-badge">
                            🔮 Expected: ${movie.expectedPrediction}% Success
                        </div>
                    </div>
                `;

                upcomingGrid.appendChild(card);
            });
        }

        // Calculate countdown
        function calculateCountdown(releaseDate) {
            const today = new Date();
            const release = new Date(releaseDate);
            const diffTime = release - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays > 0 ? diffDays : 0;
        }

        // Format date
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        }

        // Start countdown timers
        function startCountdownTimers() {
            setInterval(() => {
                upcomingMovies.forEach(movie => {
                    const countdownEl = document.getElementById(`countdown-${movie.id}`);
                    if (countdownEl) {
                        const countdown = calculateCountdown(movie.releaseDate);
                        const numberEl = countdownEl.querySelector('.countdown-number');
                        if (numberEl) {
                            numberEl.textContent = countdown;
                        }
                    }
                });
            }, 86400000); // Update every 24 hours
        }

        // Search movies
        function searchMovies() {
            const searchTerm = document.getElementById('movieSearch').value.toLowerCase();

            if (searchTerm === '') {
                filteredMovies = [...movies];
            } else {
                filteredMovies = movies.filter(movie =>
                    movie.title.toLowerCase().includes(searchTerm) ||
                    movie.genre.toLowerCase().includes(searchTerm) ||
                    movie.language.toLowerCase().includes(searchTerm)
                );
            }

            loadMovies();
        }

        document.getElementById('movieSearch').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchMovies();
            }
        });

        // Show movie details
        function showMovieDetails(movie) {
            const modal = document.getElementById('movieModal');
            const modalBody = document.getElementById('modalBody');

            modalBody.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}" class="modal-poster"
                     onerror="this.src='https://via.placeholder.com/200x300/4A90E2/ffffff?text=${encodeURIComponent(movie.title)}';">
                <div class="modal-details">
                    <h2>${movie.title}</h2>
                    <p><strong>Genre:</strong> ${movie.genre}</p>
                    <p><strong>Year:</strong> ${movie.year}</p>
                    <p><strong>Rating:</strong> ⭐ ${movie.rating}/10</p>
                    <p><strong>Language:</strong> ${movie.language}</p>
                    <p><strong>Budget:</strong> ₹${movie.budget} Crores</p>
                    <p><strong>Box Office:</strong> ₹${movie.boxOffice} Crores</p>
                    <p><strong>Director:</strong> ${movie.director}</p>
                    <p><strong>Cast:</strong> ${movie.cast.join(', ')}</p>
                    <div class="modal-prediction">
                        <h4 style="color: #4A90E2;">🎯 AI Prediction</h4>
                        <div style="font-size: 2rem; font-weight: bold; color: #4A90E2;">${movie.prediction}%</div>
                        <p style="color: #718096;">Success Probability</p>
                    </div>
                </div>
            `;

            modal.style.display = 'block';
        }

        // Show upcoming movie details
        function showUpcomingDetails(movie) {
            const modal = document.getElementById('movieModal');
            const modalBody = document.getElementById('modalBody');
            const countdown = calculateCountdown(movie.releaseDate);

            modalBody.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}" class="modal-poster"
                     onerror="this.src='https://via.placeholder.com/200x300/F7CAC9/ffffff?text=${encodeURIComponent(movie.title)}';">
                <div class="modal-details">
                    <h2>${movie.title} <span style="background: #4A90E2; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.7rem;">UPCOMING</span></h2>
                    <p><strong>Genre:</strong> ${movie.genre}</p>
                    <p><strong>Release Date:</strong> 📅 ${formatDate(movie.releaseDate)}</p>
                    <p><strong>Language:</strong> ${movie.language}</p>
                    <p><strong>Budget:</strong> ₹${movie.budget} Crores</p>
                    <p><strong>Director:</strong> ${movie.director}</p>
                    <p><strong>Cast:</strong> ${movie.cast.join(', ')}</p>
                    <div style="background: linear-gradient(135deg, #4A90E2, #B3B6E7); color: white; padding: 1rem; border-radius: 12px; text-align: center; margin-top: 1rem;">
                        <h4>⏰ Countdown</h4>
                        <div style="font-size: 2rem; font-weight: bold;">${countdown}</div>
                        <p>Days to Release</p>
                    </div>
                    <div class="modal-prediction">
                        <h4 style="color: #4A90E2;">🔮 Expected Success</h4>
                        <div style="font-size: 2rem; font-weight: bold; color: #4A90E2;">${movie.expectedPrediction}%</div>
                        <p style="color: #718096;">Predicted Success Probability</p>
                    </div>
                </div>
            `;

            modal.style.display = 'block';
        }

        // Close modal
        function closeModal() {
            document.getElementById('movieModal').style.display = 'none';
        }

        window.onclick = function(event) {
            const modal = document.getElementById('movieModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }

        // Smooth scroll
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        }

        // ML Prediction Algorithm
        document.getElementById('predictForm').addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            const movieData = {
                title: document.getElementById('title').value,
                budget: parseFloat(document.getElementById('budget').value),
                cast_count: parseInt(document.getElementById('cast_count').value),
                release_month: parseInt(document.getElementById('release_month').value),
                runtime: parseInt(document.getElementById('runtime').value),
                director_popularity: parseFloat(document.getElementById('director_popularity').value),
                tmdb_popularity: parseFloat(document.getElementById('tmdb_popularity').value),
                is_sequel: parseInt(document.getElementById('is_sequel').value),
                genre_Action: document.getElementById('genre_Action').checked ? 1 : 0,
                genre_Drama: document.getElementById('genre_Drama').checked ? 1 : 0,
                genre_SciFi: document.getElementById('genre_SciFi').checked ? 1 : 0,
                genre_Comedy: document.getElementById('genre_Comedy').checked ? 1 : 0,
                genre_Romance: document.getElementById('genre_Romance').checked ? 1 : 0
            };

            // ML Prediction Algorithm (XGBoost simulation)
            const prediction = calculateMLPrediction(movieData);

            // Display results
            displayPredictionResults(movieData.title, prediction);
        });

        // Simulated XGBoost prediction algorithm
        function calculateMLPrediction(data) {
            let score = 50; // Base score

            // Feature 1: Budget impact
            if (data.budget > 500) score += 25;
            else if (data.budget > 300) score += 20;
            else if (data.budget > 150) score += 15;
            else if (data.budget > 75) score += 10;
            else if (data.budget < 30) score -= 5;

            // Feature 2: TMDb Popularity
            if (data.tmdb_popularity > 90) score += 20;
            else if (data.tmdb_popularity > 80) score += 15;
            else if (data.tmdb_popularity > 70) score += 10;
            else if (data.tmdb_popularity > 60) score += 5;
            else if (data.tmdb_popularity < 40) score -= 5;

            // Feature 3: Genre bonuses
            const genreScores = {
                Action: 20,
                SciFi: 18,
                Comedy: 15,
                Drama: 12,
                Romance: 10
            };

            if (data.genre_Action) score += genreScores.Action;
            if (data.genre_SciFi) score += genreScores.SciFi;
            if (data.genre_Comedy) score += genreScores.Comedy;
            if (data.genre_Drama) score += genreScores.Drama;
            if (data.genre_Romance) score += genreScores.Romance;

            // Feature 4: Director popularity
            if (data.director_popularity >= 9) score += 15;
            else if (data.director_popularity >= 8) score += 12;
            else if (data.director_popularity >= 7) score += 8;
            else if (data.director_popularity >= 6) score += 5;

            // Feature 5: Release timing (seasonal)
            const summerMonths = [5, 6, 7, 8];
            const holidayMonths = [11, 12];
            if (summerMonths.includes(data.release_month)) score += 12;
            if (holidayMonths.includes(data.release_month)) score += 15;

            // Feature 6: Cast count
            if (data.cast_count > 25) score += 10;
            else if (data.cast_count > 15) score += 5;
            else if (data.cast_count < 5) score -= 5;

            // Feature 7: Sequel advantage
            if (data.is_sequel === 1) score += 15;

            // Feature 8: Runtime optimization
            if (data.runtime >= 140 && data.runtime <= 160) score += 5;
            else if (data.runtime > 180) score -= 3;
            else if (data.runtime < 90) score -= 5;

            // Feature 9: Budget per cast ratio
            const budgetPerCast = data.budget / data.cast_count;
            if (budgetPerCast > 20) score += 8;
            else if (budgetPerCast > 10) score += 4;

            // Feature 10: Popularity × Budget interaction
            const popularityBudget = (data.tmdb_popularity * data.budget) / 1000;
            if (popularityBudget > 300) score += 10;
            else if (popularityBudget > 150) score += 5;

            // Normalize to 0-100
            score = Math.max(10, Math.min(98, score));

            // Calculate revenue based on score
            let revenue = 0;
            if (score >= 90) revenue = data.budget * 4.5 + Math.random() * 200;
            else if (score >= 80) revenue = data.budget * 3.5 + Math.random() * 150;
            else if (score >= 70) revenue = data.budget * 2.5 + Math.random() * 100;
            else if (score >= 60) revenue = data.budget * 1.8 + Math.random() * 50;
            else revenue = data.budget * 1.2 + Math.random() * 30;

            const roi = revenue / data.budget;

            return {
                score: Math.round(score),
                revenue: Math.round(revenue),
                roi: roi.toFixed(2),
                confidence: score >= 80 ? 'high' : score >= 60 ? 'medium' : 'low'
            };
        }

        // Display prediction results
        function displayPredictionResults(title, prediction) {
            const resultDiv = document.getElementById('predictionResult');
            const resultTitle = document.getElementById('resultTitle');
            const resultRevenue = document.getElementById('resultRevenue');
            const resultScore = document.getElementById('resultScore');
            const resultROI = document.getElementById('resultROI');
            const successCategory = document.getElementById('successCategory');
            const factorsList = document.getElementById('factorsList');

            resultTitle.textContent = title;
            resultRevenue.textContent = `₹${prediction.revenue} Cr`;
            resultScore.textContent = `${prediction.score}%`;
            resultROI.textContent = `${prediction.roi}x`;

            // Success category
            let category = '';
            if (prediction.score >= 85) category = '🎉 BLOCKBUSTER POTENTIAL';
            else if (prediction.score >= 75) category = '✅ STRONG HIT PROBABILITY';
            else if (prediction.score >= 60) category = '👍 GOOD SUCCESS CHANCES';
            else category = '⚠️ MODERATE RISK';

            successCategory.textContent = category;

            // Generate factors
            const factors = generateSuccessFactors(prediction);
            factorsList.innerHTML = '';
            factors.forEach(factor => {
                const li = document.createElement('li');
                li.textContent = factor;
                factorsList.appendChild(li);
            });

            // Show results
            resultDiv.style.display = 'block';
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Generate success factors
        function generateSuccessFactors(prediction) {
            const factors = [];

            if (prediction.score >= 85) {
                factors.push('✅ Exceptional commercial potential');
                factors.push('✅ Strong market positioning');
                factors.push('✅ High ROI expectations');
            } else if (prediction.score >= 75) {
                factors.push('✅ Good commercial prospects');
                factors.push('✅ Favorable market conditions');
                factors.push('⚠️ Minor risk factors present');
            } else if (prediction.score >= 60) {
                factors.push('✅ Decent market appeal');
                factors.push('⚠️ Moderate competition risk');
                factors.push('⚠️ Consider marketing optimization');
            } else {
                factors.push('⚠️ Multiple risk factors identified');
                factors.push('⚠️ Market uncertainty');
                factors.push('❌ Consider strategic revisions');
            }

            factors.push(`📊 Confidence Level: ${prediction.confidence.toUpperCase()}`);
            factors.push(`💰 Expected ROI: ${prediction.roi}x`);
            factors.push(`🎯 Success Score: ${prediction.score}/100`);

            return factors;
        }
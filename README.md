WatchWave
WatchWave is a MERN (MongoDB, Express, React, Node.js) project that allows users to log in, watch trailers of movies, TV shows, and web series across various genres, and search for content. It uses the TMDB API to fetch all relevant movie information.

Features
User Authentication
Browse and watch trailers for movies, TV shows, and web series
Search functionality for finding specific content
Categorized content by genre
Technologies Used
MongoDB
Express.js
React.js
Node.js
TMDB API
Installation
Prerequisites
Node.js (v14 or later)
MongoDB (v4 or later)
TMDB API Key
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/watchwave.git
cd watchwave
Install server dependencies:

bash
Copy code
cd server
npm install
Install client dependencies:

bash
Copy code
cd ../client
npm install
Set up environment variables:

Create a .env file in the server directory and add the following:

env
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_api_key
Run the server:

bash
Copy code
cd ../server
npm start
Run the client:

bash
Copy code
cd ../client
npm start
The application should now be running at http://localhost:3000.

Usage
Sign Up / Log In:
Create an account or log in with existing credentials.

Browse Content:
Explore trailers of movies, TV shows, and web series categorized by genres.

Search:
Use the search bar to find specific content.

Contributing
We welcome contributions! Please fork the repository and create a pull request with your changes.

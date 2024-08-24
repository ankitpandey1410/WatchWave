# WatchWave

WatchWave is a MERN (MongoDB, Express, React, Node.js) project that allows users to log in, watch trailers of movies, TV shows, and web series across various genres, and search for content. It uses the TMDB API to fetch all relevant movie information.

## Features

- User Authentication
- Browse and watch trailers for movies, TV shows, and web series
- Search functionality for finding specific content
- Categorized content by genre

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- TMDB API

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (v4 or later)
- TMDB API Key

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/watchwave.git
   cd watchwave
   
2. **Install server dependencies:**

  ```bash
  cd server
  npm install

3. **Install client dependencies:**
  ```bash
  cd ../client
  npm install

4. **Set up environment variables:**

  Create a .env file in the server directory and add the following:
  ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    TMDB_API_KEY=your_tmdb_api_key

5. **Run the server:**

```bash
  cd ../server
  npm start

6. **Run the client:**

  ```bash
  cd ../client
  npm start
  The application should now be running at http://localhost:3000.

##Usage
1. **Sign Up / Log In:**
Create an account or log in with existing credentials.

2. **Browse Content:**
Explore trailers of movies, TV shows, and web series categorized by genres.

3. **Search:**
Use the search bar to find specific content.

##Contributing
We welcome contributions! Please fork the repository and create a pull request with your changes.

##Acknowledgements
TMDB API
MERN Stack Documentation

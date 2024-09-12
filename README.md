
# WatchWave MERN Project

WatchWave is a full-stack project built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to log in, watch trailers of movies, TV shows, and web series across various genres, and search for content. It uses the TMDB API to fetch all relevant movie information.

## Features

- **User Authentication:** Sign up, log in, and log out using JWT authentication.
- **Browse Trailers:** Watch trailers for movies, TV shows, and web series.
- **Search Functionality:** Search for specific content across the platform.
- **Categorized Content:** Browse content categorized by genre.

## Tech Stack

- **Frontend:**
  - React.js
  - React Router (for routing)
  - Axios (for API calls)
  
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - JWT for authentication

- **API:**
  - TMDB API for fetching movie and TV show details

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14+)
- MongoDB
- TMDB API Key

### Steps

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/yourusername/watchwave.git
   cd watchwave
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   cd server
   npm install
   
   cd ../client
   npm install
   \`\`\`

3. **Set up environment variables:**
   Create a \`.env\` file in the server directory and add the following:
   - MONGO_URI=your_mongodb_connection_string
   - JWT_SECRET=your_jwt_secret
   - TMDB_API_KEY=your_tmdb_api_key

4. **Run the application:**
   \`\`\`bash
   cd server
   npm start

   cd ../client
   npm start
   \`\`\`

   The application should now be running at \`http://localhost:3000\`.

### Environment Variables
Ensure that you have set the following environment variables in your \`.env\` file:

- **MONGO_URI:** The MongoDB connection string.
- **JWT_SECRET:** Secret key for signing JWT tokens.
- **TMDB_API_KEY:** Your TMDB API key for fetching movie and TV show data.

### Usage

- **Sign Up/Log In:** Create an account or log in with an existing account.
- **Browse Trailers:** Watch trailers for movies, TV shows, and web series.
- **Search Content:** Use the search bar to find specific content.
- **Explore by Genre:** Discover movies, TV shows, and web series categorized by genres.

### Contributing

- Contributions are welcome! Please submit a pull request or open an issue to discuss any changes or suggestions.

### Acknowledgments

- **TMDB API:** For providing movie and TV show data.
- **MERN Stack Documentation:** For valuable insights and guides.

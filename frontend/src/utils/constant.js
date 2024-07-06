// export const API_END_POINT = "http://localhost:8080/api/v1/user"
export const API_END_POINT = "https://watchwave-backend.vercel.app"

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2JlOWI0YWFhYWE3M2U0YzgyZDdiN2NlNDY5M2FmYyIsIm5iZiI6MTcxOTMxNjI0NC4zMzQ0MjcsInN1YiI6IjY2N2FhZDExYTY5YTkzMWYyYmNiYzU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Tm6OFaiPJyyeUEAkzNbEjuwfA9NXn9UJCSk0mHN0Aw'
  }
};

export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing" 
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular"
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated"
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming"

export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query="

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500"
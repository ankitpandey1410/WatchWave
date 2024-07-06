import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId,bool}) => {

  useMovieById(movieId);

  const trailerMovie = useSelector(store => store.movie.trailerMovie)

  return (
    <div className="w-[vw] overflow-hidden">
      <iframe 
        className={`${bool ? "w-[100%]" : "w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`} 
        title="YouTube video player" 
        frameborder="0"  
        allowfullscreen>
      </iframe>
    </div>
  )
}

export default VideoBackground


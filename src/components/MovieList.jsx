import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
  return (
    <div>
      {props.movies.slice(0, 10).map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterUrl={movie.poster}
          />
      ))}
    </div>
  )
}

export default MovieList;

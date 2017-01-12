import React from 'react';

const MovieList = (props) => {
  console.log(props)
  return (
    <ul>
      {props.movies.map(movie => {
        return <li>{movie.Title}</li>
      })}
    </ul>
  )
}

export default MovieList;

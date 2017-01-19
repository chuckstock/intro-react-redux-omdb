import axios from 'axios';

export const fetchMovies = (term) => {
  const request = axios.get(`http://localhost:1337/movies?s=${term}`);

  return {
    type: 'FETCH_MOVIES',
    payload: request
  }
}

export const clearMovies = () => {
  return {
    type: 'CLEAR_MOVIES'
  }
}

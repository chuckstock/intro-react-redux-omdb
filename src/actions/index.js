import axios from 'axios';

export const fetchMovies = (term) => {
  const request = axios.get(`https://www.omdbapi.com/?s=${term}`);

  return {
    type: 'FETCH_MOVIES',
    payload: request
  }
}

export const setMovies = (movies) => {
  return {
    type: 'SET_MOVIES',
    payload: movies
  }
}

export const clearMovies = () => {
  return {
    type: 'CLEAR_MOVIES'
  }
}

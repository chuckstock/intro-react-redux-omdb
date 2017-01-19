const movieReducer = (state = [], action) => {
  if (action.type === 'SET_MOVIES') {
    return action.payload;
  } else if (action.type === 'CLEAR_MOVIES') {
    return [];
  }
  return state;
}

export default movieReducer;

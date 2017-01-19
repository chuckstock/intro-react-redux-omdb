const movieReducer = (state = [], action) => {
  if (action.type === 'FETCH_MOVIES') {
    return action.payload.data;
  } else if (action.type === 'CLEAR_MOVIES') {
    return [];
  }
  return state;
}

export default movieReducer;

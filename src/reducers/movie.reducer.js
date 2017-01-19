const movieReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'FETCH_MOVIES':
      return action.payload.data.Search;
    default:
      return state;
  }
}

export default movieReducer;

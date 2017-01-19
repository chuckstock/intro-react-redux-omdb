import { combineReducers } from 'redux';
import movieReducer from './movies.reducer';

const rootReducer = combineReducers({
  movies: movieReducer
});

export default rootReducer;

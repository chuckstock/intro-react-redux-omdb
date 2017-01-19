import { combineReducers } from 'redux';
import movieReducer from './movie.reducer';

const rootReducer = combineReducers({
  movies: movieReducer
});

export default rootReducer;

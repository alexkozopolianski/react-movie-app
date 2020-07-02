import { combineReducers } from 'redux';
import configReducer from './configReducer';
import moviesReducer from './moviesReducer';
import movieReducer from './movieReducer';

import recommendationsReducer from './recommendationsReducer';

import errorsReducer from './errorsReducer';

export default combineReducers({
  geral: configReducer,
  movies: moviesReducer,
  movie: movieReducer,
  recommended: recommendationsReducer,
  errors: errorsReducer,
});

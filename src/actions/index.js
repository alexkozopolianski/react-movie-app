import * as TYPES from './types';
import tmdbAPI from '../api/tmdb';
import history from '../history';

// Когда приложение загрузилось
export const init = () => async dispatch => {
  dispatch({ type: TYPES.SET_LOADING });
  await dispatch(getConfig());
  await dispatch(getGenres());
  dispatch({ type: TYPES.REMOVE_LOADING });
};

// Функция для получения  конфигурации из API
export const getConfig = () => async dispatch => {
  const res = await tmdbAPI.get('/configuration');
  dispatch({
    type: TYPES.GET_CONFIG,
    payload: res.data,
  });
};

// Получение жанров из API
export const getGenres = () => async dispatch => {
  const res = await tmdbAPI.get('/genre/movie/list');
  dispatch({
    type: TYPES.GET_GENRES,
    payload: res.data,
  });
};

// Set the current selected menu (discover or genre), if is valid
export const setSelectedMenu = name => (dispatch, getState) => {
  const { staticCategories, genres } = getState().geral;
  if (!name) {
    dispatch({ type: TYPES.REMOVE_SELECTED_MENU });
  } else if (
    staticCategories.find(category => category === name) ||
    genres.find(genre => genre.name === name)
  ) {
    dispatch({
      type: TYPES.SELECTED_MENU,
      payload: name,
    });
  } else {
    history.push(process.env.PUBLIC_URL + '/404');
  }
};



// Get movies discover
export const getMoviesDiscover = (name, page) => async (dispatch, getState) => {
  const { selected } = getState().geral;
  if (!selected) {
    return;
  }
  try {
    dispatch({ type: TYPES.FETCH_MOVIES_LOADING });
    const res = await tmdbAPI.get(`/movie/${name}`, {
      params: {
        page,
      },
    });
    await dispatch({
      type: TYPES.FETCH_MOVIES_DISCOVER,
      payload: res.data,
    });
    dispatch({ type: TYPES.FETCH_MOVIES_FINISHED });
  } catch (err) {
    dispatch({ type: TYPES.INSERT_ERROR, payload: err.response });
    history.push(process.env.PUBLIC_URL + '/error');
  }
};

// Получение результатов поиска
export const getMoviesSearch = (query, page) => async dispatch => {
  try {
    dispatch({ type: TYPES.FETCH_MOVIES_LOADING });
    const res = await tmdbAPI.get(`/search/movie`, {
      params: {
        query,
        page,
      },
    });
    await dispatch({
      type: TYPES.FETCH_MOVIES_SEARCH,
      payload: res.data,
    });
    dispatch({ type: TYPES.FETCH_MOVIES_FINISHED });
  } catch (err) {
    dispatch({ type: TYPES.INSERT_ERROR, payload: err.response });
    history.push(process.env.PUBLIC_URL + '/error');
  }
};

// Меняет значение стейта loading на true 
export const clearMovies = () => {
  return {
    type: TYPES.FETCH_MOVIES_LOADING,
  };
};

// Получение данных определенного фильма
export const getMovie = id => async dispatch => {
  try {
    dispatch({ type: TYPES.FETCH_MOVIE_LOADING });
    const res = await tmdbAPI.get(`/movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    });
    await dispatch({
      type: TYPES.FETCH_MOVIE,
      payload: res.data,
    });
    
    dispatch({ type: TYPES.FETCH_MOVIE_FINISHED });
  } catch (err) {
    dispatch({ type: TYPES.INSERT_ERROR, payload: err.response });
    history.push(process.env.PUBLIC_URL + '/error');
  }
};

// Меняет значение стейта loading на true 
export const clearMovie = () => {
  return {
    type: TYPES.FETCH_MOVIE_LOADING,
  };
};


// Функция получения рекомендованных фильмов,аргументов которой является часть url,которая изменяется при помощий компонента Pagination.js
export const getRecommendations = (id, page) => async dispatch => {
  try {
    dispatch({ type: TYPES.FETCH_RECOMMENDATIONS_LOADING });
    const res = await tmdbAPI.get(`/movie/${id}/recommendations`, {
      params: {
        page,
      },
    });
    await dispatch({
      type: TYPES.FETCH_RECOMMENDATIONS,
      payload: res.data,
    });
    dispatch({ type: TYPES.FETCH_RECOMMENDATIONS_FINISHED });
  } catch (err) {
    dispatch({ type: TYPES.INSERT_ERROR, payload: err.response });
    history.push(process.env.PUBLIC_URL + '/error');
  }
};

// Меняет значение стейта  loading на true 
export const clearRecommendations = () => {
  return {
    type: TYPES.FETCH_RECOMMENDATIONS_LOADING,
  };
};




// Очистка ошибок
export const clearError = () => ({ type: TYPES.CLEAR_ERROR });

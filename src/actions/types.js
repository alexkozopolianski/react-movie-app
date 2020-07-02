
// Получить данные от API и один из выбранных запросов,в моем случае это popular
export const GET_CONFIG = 'GET_CONFIG';
export const GET_GENRES = 'GET_GENRES';

// Установить выбранный запрос,в моем случае это популярные фильмы,но api еще возвращает высокооцененные фильмы и недавно вышедшие
export const SELECTED_MENU = 'SELECTED_MENU';
export const REMOVE_SELECTED_MENU = 'REMOVE_SELECTED_MENU';

// Запросы к api
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIES_GENRE = 'FETCH_MOVIES_GENRE';
export const FETCH_MOVIES_DISCOVER = 'FETCH_MOVIES_DISCOVER';
export const FETCH_MOVIES_SEARCH = 'FETCH_MOVIES_SEARCH';
export const FETCH_MOVIES_RECOMMENDED = 'FETCH_MOVIES_RECOMMENDED';
export const FETCH_RECOMMENDATIONS = 'FETCH_RECOMMENDATIONS';


// LOADINGS
// Загрузка жанров
export const SET_LOADING = 'SET_LOADING';
export const REMOVE_LOADING = 'REMOVE_LOADING';

// Загрузка фильмов
export const FETCH_MOVIES_LOADING = 'FETCH_MOVIES_LOADING';
export const FETCH_MOVIES_FINISHED = 'FETCH_MOVIES_FINISHED';

// Данные конкретного фильма
export const FETCH_MOVIE_LOADING = 'FETCH_MOVIE_LOADING';
export const FETCH_MOVIE_FINISHED = 'FETCH_MOVIE_FINISHED';


// Получение рекомендованных фильмов
export const FETCH_RECOMMENDATIONS_LOADING = 'FETCH_RECOMMENDATIONS_LOADING';
export const FETCH_RECOMMENDATIONS_FINISHED = 'FETCH_RECOMMENDATIONS_FINISHED';


//Ошибки
export const INSERT_ERROR = 'INSERT_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

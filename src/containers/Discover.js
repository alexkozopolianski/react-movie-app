import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Header from '../components/Header';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';



import { setSelectedMenu, getMoviesDiscover, clearMovies } from '../actions';
import MoviesList from '../components/MoviesList';
import Loading from '../components/Loading';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

// Функция для отображения главной страницы
const Discover = ({
  geral,
  match,
  location,
  setSelectedMenu,
  getMoviesDiscover,
  clearMovies,
  movies,
}) => {
  const params = queryString.parse(location.search);
  const { secure_base_url } = geral.base.images;

  // Отправка url адреса в функцию setSelectedMenu для проверки
  useEffect(() => {
    setSelectedMenu(match.params.name);
    // Очистка
    return () => setSelectedMenu();
  }, [match.params.name]);

  // Вызов хука для поиска фильмов с аргументов в виде url
  useFetchMoviesDiscover(
    match.params.name,
    getMoviesDiscover,
    params,
    clearMovies
  );

  // если состояние  loading равно true
  if (movies.loading) {
    return <Loading />;
  }

  // если состояние loading равно false возвращается список с фильмами
  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${geral.selected} Movies`}</title>
      </Helmet>
      <Header title={geral.selected} subtitle="Популярные фильмы:" />
      <MoviesList movies={movies} baseUrl={secure_base_url} />
    </Wrapper>
  );
};

// Хук для получения фильмов, будет вызываться каждый раз,когда меняется маршрут 
function useFetchMoviesDiscover(name, getMoviesDiscover, params, clearMovies) {
  const query = name.replace(/\s+/g, '_').toLowerCase();
  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
    });
    getMoviesDiscover(query, params.page);
    return () => clearMovies();
  }, [query, params.page]);
}

// Преобразование state в данные
const mapStateToProps = ({ geral, movies }) => {
  return { geral, movies };
};

export default connect(
  mapStateToProps,
  { setSelectedMenu, getMoviesDiscover, clearMovies }
)(Discover);

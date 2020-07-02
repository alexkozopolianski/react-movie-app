import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

import { getMoviesSearch, clearMovies } from '../actions';
import MoviesList from '../components/MoviesList';
import Loading from '../components/Loading';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Search = ({
  geral,
  match,
  location,
  getMoviesSearch,
  clearMovies,
  movies,
}) => {
  const { query } = match.params;
  const params = queryString.parse(location.search);
  const { secure_base_url } = geral.base.images;

  // Хук для получения фильмов
  useFetchMoviesSearch(query, getMoviesSearch, params, clearMovies);

  // Если состояние  loading равно true
  if (movies.loading) {
    return <Loading />;
  }

  //Если результатов поиска нет
  else if (movies.total_results === 0) {
    return (
      <NotFound
        subtitle={`Ничего не найдено по запросу ${query}...`}
      />
    );
  }

  // Если результаты есть
  else {
    return (
      <Wrapper>
        <Helmet>
          <title>{`${query} - search results`}</title>
        </Helmet>
        <Header title={query} subtitle="search results" />
        <MoviesList movies={movies} baseUrl={secure_base_url} />;
      </Wrapper>
    );
  }
};

// Хук для получения фильмов, будет вызываться каждый раз,когда меняется маршрут 
function useFetchMoviesSearch(query, getMoviesSearch, params, clearMovies) {
  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
    });
    getMoviesSearch(query, params.page);
    return () => clearMovies();
  }, [query, params.page]);
}

// Преобразование state в данные
const mapStateToProps = ({ geral, movies }) => {
  return { geral, movies };
};

export default connect(
  mapStateToProps,
  { getMoviesSearch, clearMovies }
)(Search);

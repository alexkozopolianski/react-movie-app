import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import Genres from './Genres';
import Loading from '../components/Loading';

const MovieWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background-color: transparent;
  border-radius: 0.8rem;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    transform: scale(1.03);

    ::after {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    background-color: var(--color-primary);
    z-index: -99;
    box-shadow: 0rem 2rem 5rem var(--shadow-color-dark);
    transition: all 100ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

const MovieImg = styled.img`
  width: 100%;
  height: 38rem;
  object-fit: ${props => (props.error ? 'contain' : 'cover')};
  border-radius: 0.8rem;
  padding: ${props => (props.error ? '2rem' : '')};
  box-shadow: 0rem 2rem 5rem var(--shadow-color);
  transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);

  ${MovieWrapper}:hover & {
    border-radius: 0.8rem 0.8rem 0rem 0rem;
    box-shadow: none;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    height: 28rem;
  }
`;

const ImgLoading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 300px;
  border-radius: 0.8rem;
  box-shadow: 0rem 2rem 5rem var(--shadow-color);
  transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--color-primary-light);
  margin-bottom: 1rem;
  line-height: 1.4;
  transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  ${MovieWrapper}:hover & {
    color: var(--text-color);
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;

  @media ${props => props.theme.mediaQueries.smaller} {
    padding: 1.5rem 1.5rem;
  }
`;

const RatingsWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 0.5rem;
  color: var(--color-primary-light);

  ${MovieWrapper}:hover & {
    color: var(--text-color);
  }
`;





// Функция отображения элементов списка
const MovieItem = ({ movie, baseUrl }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    return () => setLoaded(false);
  }, []);
  return (
    <LazyLoad height={200} offset={200}>
      <MovieWrapper to={`${process.env.PUBLIC_URL}/movie/${movie.id}`}>
        {!loaded ? (
          <ImgLoading>
            <Loading />
          </ImgLoading>
        ) : null}
        <MovieImg
          error={error ? 1 : 0} onLoad={() => setLoaded(true)}
          style={!loaded ? { display: 'none' } : {}}
          src={`${baseUrl}w342${movie.poster_path}`}
        />
        <DetailsWrapper>
          <Title>{movie.title}</Title>
          <RatingsWrapper>
            {movie.genre_ids.map(genres =>(                       //Преобразую каждый элемент массива в элемент списка
              <Genres genre={genres} />  ))}
          </RatingsWrapper>
        </DetailsWrapper>
      </MovieWrapper>
    </LazyLoad>
  );
};

export default MovieItem;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => {
    if (props.type === 'one') {
      return 'flex-start';
    } else if (props.type === 'both') {
      return 'space-between';
    } else {
      return 'flex-end';
    }
  }};
`;

const WrapperLink = styled(Link)`
  text-decoration: none;
`;
//Функция для пагинации рекомендованных и популярных фильмов,она добавляет в url адрес страницы аргумент,используемый в функциях для отображения фильмов в ../actions/index
const Pagination = ({ movies }) => {
  const { page, total_pages } = movies;

  const scrollTo = () => {
    scroller.scrollTo('scroll-to-element', {
      duration: 1500,
      smooth: 'easeInOutQuart',
      offset: -50,
    });
  };

  // Если всего 1 страница
  if (total_pages === 1) {
    return null;
  }

  // Визуализация кнопки на первой странице
  if (page < total_pages && page === 1) {
    return (
      <Wrapper>
        <WrapperLink
          to={`${process.env.PUBLIC_URL}?page=${page + 1}`}
          onClick={scrollTo}
        >
          <Button solid title={`Страница ${page + 1}`} icon="arrow-right" />
        </WrapperLink>
      </Wrapper>
    );
  }

  // Визуализация кнопок на следующих страницах
  else if (page < total_pages) {
    return (
      <Wrapper type="both">
        <WrapperLink
          to={`${process.env.PUBLIC_URL}?page=${page - 1}`}
          onClick={scrollTo}
        >
          <Button solid left title={`Страница ${page - 1}`} icon="arrow-left" />
        </WrapperLink>
        <WrapperLink
          to={`${process.env.PUBLIC_URL}?page=${page + 1}`}
          onClick={scrollTo}
        >
          <Button solid title={`Страница ${page + 1}`} icon="arrow-right" />
        </WrapperLink>
      </Wrapper>
    );
  }

  // Если последующих страниц нет
  else {
    return (
      <Wrapper type="one">
        <WrapperLink
          to={`${process.env.PUBLIC_URL}?page=${page - 1}`}
          onClick={scrollTo}
        >
          <Button solid left title={`Страница ${page - 1}`} icon="arrow-left" />
        </WrapperLink>
      </Wrapper>
    );
  }
};

export default Pagination;

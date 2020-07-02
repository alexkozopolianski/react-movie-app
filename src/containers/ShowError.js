import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import history from '../history';
import { animateScroll as scroll } from 'react-scroll';

import { clearError } from '../actions';
import Button from '../components/Button';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media ${props => props.theme.mediaQueries.medium} {
    width: 65%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 6rem;
`;

const Title = styled.h1`
  color: var(--color-primary);
  font-weight: 300;
  font-size: 3.5rem;
`;


const LinkWrapper = styled(Link)`
  text-decoration: none;
`;


//Функция для отображения ошибок
const ShowError = ({ errors, clearError }) => {
  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
    });
    return () => clearError();
  }, []);

  if (errors.length === 0) {
    history.push(`${process.env.PUBLIC_URL}/`);
    return null;
  }
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Ничего не найдено</Title>
      </TitleWrapper>
      <LinkWrapper to={`${process.env.PUBLIC_URL}/`}>
        <Button title="Домой" solid icon="home" left />
      </LinkWrapper>
    </Wrapper>
  );
};

const mapStateToProps = ({ errors }) => ({ errors });

export default connect(
  mapStateToProps,
  { clearError }
)(ShowError);

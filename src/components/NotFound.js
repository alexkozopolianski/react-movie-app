import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




import Button from './Button';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
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

const SubTitle = styled.h2`
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1.8rem;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

//Функция для отображения отрицательных результатов поиска

const NotFound = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </TitleWrapper>
      <LinkWrapper to={process.env.PUBLIC_URL + '/'}>
        <Button title="Домой" solid icon="home" left />
      </LinkWrapper>
    </Wrapper>
  );
};

export default NotFound;

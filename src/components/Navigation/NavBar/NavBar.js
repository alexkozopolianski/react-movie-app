import React from 'react';
import styled from 'styled-components';
import SearchBar from '../../SearchBar';
import NavItems from './NavItems';

export const Container = styled.div`
  width: 100%;
  max-width: 140rem;
  margin: 0 auto;
  height: 100%;
`;



const FixedWrapper = styled.header`
  position: fixed;
  background-color: #1c1e25;
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  z-index: 99999;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;


//Функция для отображения навигационной панели и ее элементов
const Navbar = () => {
  return (
    <FixedWrapper>
      <Container>
        <Wrapper>
            <NavItems/>
        <SearchBar/>
         
        </Wrapper>
        </Container>
    </FixedWrapper>
  );
};

export default Navbar;
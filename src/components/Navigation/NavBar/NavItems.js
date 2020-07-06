import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem';

const Nav = styled.nav`
  display: flex;
  
`;

const Ul = styled.ul`
  display: flex;
  
  align-items: center;
  height: 100%;
`;

const NavItems = ( clicked ) => {
  
  return( <Nav > <Ul>
  <NavItem  link="/">
  Главная
  </NavItem>
  
  
</Ul>
</Nav>);
};

export default NavItems;

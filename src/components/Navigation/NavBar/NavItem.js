import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Li = styled.li`
  display: flex;
  height: 100%;
`;

const StyledNavLink = styled(Link)`
  display: flex;
  text-decoration: none
  text-transform: uppercase;
  align-items: center;
  border-bottom: 2px solid transparent;
  font-size: 1.2rem;
  padding:  1rem;
  margin: 0 1rem;
  font-weight: 400;
  color: white;
  transition: all 0.2s;
  &:hover {
    border-bottom: 2px solid var(--color-white);
  }
`;


const NavItem = ({ link, children,  clicked }) => {
  return (
    <Li>
      <StyledNavLink
         onClick={clicked}  exact  path={process.env.PUBLIC_URL + '/'}
        activeClassName="active" to={process.env.PUBLIC_URL + '/discover/Popular'}
      >
        {children}
      </StyledNavLink>
    </Li>
  );
};

export default NavItem;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from '../history';
import { connect } from 'react-redux';
import { init } from '../actions';


import Discover from './Discover';
import Search from './Search';
import Movie from './Movie';

import ShowError from './ShowError';

import NotFound from '../components/NotFound';
import NavBar from '../components/Navigation/NavBar/NavBar';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowLeft,faArrowRight,faHome,
  faCalendar,faPoll,faHeart,
  faDotCircle,faStar as fasFaStar,
  faSearch,faChevronRight,faChevronLeft,
  faLink,faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

library.add(
  fab,faArrowLeft,
  faArrowRight,faHome,
  faCalendar,faPoll,
  faHeart,faDotCircle,
  fasFaStar,farFaStar,
  faSearch,faChevronRight,
  faChevronLeft,faLink,faPlay
);


//Я использую styled-components для написания css свойств
const MainWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
  position: relative;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  user-select: none;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #13141b;
  justify-content: center;
  padding: 6rem 4rem;

  @media ${props => props.theme.mediaQueries.larger} {
    padding: 6rem 3rem;
  }

  @media ${props => props.theme.mediaQueries.large} {
    padding: 4rem 2rem;
  }
`;

const SearhBarWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem;
`;



const App = ({ init, isLoading }) => {

  useEffect(() => {
    init();
  }, []);

  return isLoading ? (
    <ContentWrapper>
      <Loading />
    </ContentWrapper>
  ) : (
    <Router history={history}>
      <React.Fragment>
        <MainWrapper >
              <SearhBarWrapper>
                <NavBar />
              </SearhBarWrapper>
          <ContentWrapper>
            <Switch>
              <Route
                path={process.env.PUBLIC_URL + '/'}
                exact
                render={() => (
                  <Redirect
                    from={process.env.PUBLIC_URL + '/'}
                    to={process.env.PUBLIC_URL + '/discover/Popular'}
                  />
                )}
              />
             
              <Route
                path={process.env.PUBLIC_URL + '/discover/:name'}
                exact component={Discover}
              />
              <Route
                path={process.env.PUBLIC_URL + '/search/:query'}
                exact component={Search}
              />
              <Route
                path={process.env.PUBLIC_URL + '/movie/:id'}
                exact component={Movie}
              />
              
              <Route
                path="/404"
                component={() => (
                  <NotFound  subtitle={`Ничего не найдено`} />
                )}
              />
              <Route
                path={process.env.PUBLIC_URL + '/error'}
                component={ShowError}
              />
              <Route
                component={() => (
                  <NotFound  subtitle={`Ничего не найдено`} />
                )}
              />
            </Switch>
          </ContentWrapper>
        </MainWrapper>
      </React.Fragment>
    </Router>
  );
};

const mapStateToProps = ({ geral }) => {
  return { isLoading: geral.loading };
};

export default connect(
  mapStateToProps,
  { init }
)(App);

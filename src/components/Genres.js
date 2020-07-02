import React from 'react'
import styled from 'styled-components';

//nth-child(5) не отображает последний элемент,так как тот выходит за рамки
const StyledLink = styled.div`
  text-decoration: none;
  display: block;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  padding: 0.5rem 0rem;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:not(:last-child) {
    margin-right: 0.6rem;
  }

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(2px);
  }

  :nth-child(5){
      display: none;                
  }
`;


//Функция для изменения айди на соответствующий жанр фильма
const renderGenre = (genre) =>{
    switch(genre) {

        case 28:
            return "Action"
          
        case  12:
            return "Adventure"
    
        case 16:
            return "Animation"

        case 35:
            return "Comedy"

        case 80:
            return "Crime"

        case 99:
            return "Documentary"

        case 18:
            return "Drama"
         
        case 10751:
            return "Family"

        case 14:
            return "Fantasy"
            
        case 36:
            return "History"
            
        case 27:
            return "Horror"
            
        case 10402:
            return "Music"
            
        case 9648:
            return "Mystery"
            
        case 10749:
            return "Romance"
            
        case 878:
            return "Sci-Fi"
            
        case 10770:
            return "TV Movie"

        case 53:
            return "Thriller"
            
        case 10752:
            return "War"
          
        case 37:
            return "Western"
            
        }
}

const Genres = ({genre}) => {
    return <StyledLink>{renderGenre(genre)}</StyledLink>
}

export default Genres;
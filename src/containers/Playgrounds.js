import React from 'react';
import styled from 'styled-components';
import CircleProgressBar from '../components/Circle/CircleProgressBar';


//Функция для отображения круга с рейтингом
const Playground = ({percentage}) => {
  return (
    <div>
      <CircleProgressBar
        trailStrokeColor="blue" strokeColor="teal" percentage={percentage}
        innerText="Рейтинг" speed={6}/>
    </div>
  );
};

export default Playground;


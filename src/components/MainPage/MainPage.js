import React from 'react';
import { func, number } from 'prop-types';

import Card from '../Card/Card';
import Diagram from '../Diagram/Diagram';

import { addCounterOne, addCounterTwo } from '../../redux/action';
import connect from '../../redux/connect';

import imgOne from '../img/one.png';
import imgTwo from '../img/two.png';

import styles from './MainPage.module.css';

const COLORS = ['red', 'black'];

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  handleOne: () => dispatch(addCounterOne()),
  handleTwo: () => dispatch(addCounterTwo())
});

const MainPage = ({ counterOne, counterTwo, handleOne, handleTwo }) => {
  const total = counterOne + counterTwo;
  const data = [
    { name: 'One', value: (counterOne * 100) / (total === 0 ? 1 : total) },
    { name: 'Two', value: (counterTwo * 100) / (total === 0 ? 1 : total) }
  ];

  return (
    <div className={styles.mainPage}>
      <div className={styles.wrapper}>
        <Card title={data[0].name} url={imgOne} counter={counterOne} handle={handleOne} color={COLORS[0]} />
        <Diagram data={data} COLORS={COLORS} />
        <Card title={data[1].name} url={imgTwo} counter={counterTwo} handle={handleTwo} color={COLORS[1]} />
      </div>
    </div>
  );
};

MainPage.propTypes = {
  handleOne: func.isRequired,
  handleTwo: func.isRequired,
  counterOne: number.isRequired,
  counterTwo: number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

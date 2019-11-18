import React from 'react';
import { func, number, string } from 'prop-types';
import styles from './Card.module.css';

const Card = ({ handle, url, counter, color, title }) => (
  <div className={styles.avatar}>
    <img className={styles.img} src={url} alt="img" />
    <div className={styles.title}>{title}</div>
    <div className={styles.counter}>{counter}</div>
    <button
      onClick={handle}
      className={styles.button}
      style={{ backgroundColor: `${color}` }}
    />
  </div>
);

Card.propTypes = {
  handle: func.isRequired,
  counter: number.isRequired,
  color: string.isRequired,
  url: string,
  title: string
};

export default Card;

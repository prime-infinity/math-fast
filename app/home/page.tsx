import React from 'react';
import styles from './home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.rectangle} ${styles.large} ${styles.top}`}></div>
      <div className={styles.middleContainer}>
        <div className={`${styles.rectangle} ${styles.medium}`}></div>
        <div className={`${styles.rectangle} ${styles.small}`}></div>
      </div>
      <div className={`${styles.rectangle} ${styles.large} ${styles.bottom}`}></div>
    </div>
  );
};

export default Home;
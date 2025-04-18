import React from 'react';
import styles from './GridHeader.module.css';
import { ArrowRight, Computer, UserPlus } from 'lucide-react';
import Grid from '../Grid/Grid';

const PhotoGrid = ({ title, onReplaceClick }) => {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.headerBtns}>
        <button className={styles.btn}>
          <UserPlus size={24} />
        </button>
        <button className={styles.btn}>
          Select PC <Computer size={24} />
        </button>
        <button className={styles.btn} onClick={onReplaceClick}>
          Replace <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default PhotoGrid;
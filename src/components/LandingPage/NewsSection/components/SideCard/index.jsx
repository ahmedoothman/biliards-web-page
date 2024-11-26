import React from 'react';
import styles from './index.module.scss';

/* 
  {
    title: 'Side Title 1',
    date: '2021-09-01',
    image: '/src/assets/side-video-cover.png',
  },
*/
export default function SideCard({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={data.image} alt={data.title} />
        <img
          src={'/src/assets/play-circle.png'}
          alt='play'
          className={styles.playIcon}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <p>{data.title}</p>
        </div>
        <div className={styles.date}>
          <p>{data.date}</p>
        </div>
      </div>
    </div>
  );
}

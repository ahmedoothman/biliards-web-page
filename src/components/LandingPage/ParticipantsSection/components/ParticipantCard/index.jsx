import React from 'react';
import styles from './index.module.scss';
export default function ParticipantCard({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.image}></div>
      </div>
      <p style={{ marginTop: '10px', color: 'white' }}>{data.name}</p>
    </div>
  );
}

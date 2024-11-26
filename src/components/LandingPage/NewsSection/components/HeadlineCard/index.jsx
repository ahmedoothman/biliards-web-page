import React from 'react';
import styles from './index.module.scss';
export default function HeadlineCard({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={data.image} alt={data.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <p>{data.title}</p>
        </div>
        <div className={styles.description}>
          <p>{data.description}</p>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.date}>
          <p>{data.date}</p>
        </div>

        <div className={styles.actions}>
          <button className={styles.actionBtn} onClick={() => {}}>
            <p>read more</p>
          </button>
        </div>
      </div>
    </div>
  );
}

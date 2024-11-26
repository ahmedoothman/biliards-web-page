import React from 'react';
import styles from './index.module.scss';
import { useSelector } from 'react-redux';
export default function SectionHeader({ title, actionTitle, moreAction }) {
  const lang = useSelector((state) => state.uiSlice.lang);
  return (
    <div
      className={`${styles.container}
     ${lang === 'ar' ? styles.arContainer : ''}`}
    >
      <div
        className={`${styles.titleContainer} ${
          lang === 'ar' ? styles.arTitleContainer : ''
        }`}
      >
        <h1 className={styles.title}>{title}</h1>
      </div>
      {moreAction && (
        <button onClick={moreAction} className={styles.moreButton}>
          {actionTitle}
        </button>
      )}
    </div>
  );
}

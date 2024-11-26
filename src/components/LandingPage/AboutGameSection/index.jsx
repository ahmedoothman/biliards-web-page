import React from 'react';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function AboutGameSection() {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.uiSlice.lang);
  return (
    <div className={styles.container}>
      <div className={styles.part}>
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <h1
              className={`${styles.title} 
            ${lang === 'ar' ? styles.arTitle : ''}
            `}
            >
              {t('aboutGame.title')}
            </h1>
          </div>
          <div className={styles.paragraphContainer}>
            <p
              className={`${styles.paragraph} 
            ${lang === 'ar' ? styles.arTitle : ''}
            `}
            >
              {t('aboutGame.paragraph')}
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>{t('aboutGame.button')}</button>
          </div>
        </div>
      </div>
      <div className={styles.part}>
        <div className={styles.partContainer}>
          <div className={styles.imgContainer}>
            <img
              src='/src/assets/about-game-image.png'
              alt='AboutGameSection'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

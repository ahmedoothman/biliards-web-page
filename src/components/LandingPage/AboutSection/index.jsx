import React from 'react';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
export default function About() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.part}>
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{t('about.title')}</h1>
          </div>
          <div className={styles.paragraphContainer}>
            <p className={styles.paragraph}>{t('about.paragraph')}</p>
          </div>
        </div>
      </div>
      <div className={styles.part}>
        <div className={styles.partContainer}>
          <div className={styles.imgContainer}>
            <img src='/src/assets/about-image.png' alt='about' />
          </div>
        </div>
      </div>
    </div>
  );
}

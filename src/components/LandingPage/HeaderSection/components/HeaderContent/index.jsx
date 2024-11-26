import React from 'react';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function Index() {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.uiSlice.lang);

  return (
    <div
      className={`${styles.container} ${lang === 'ar' ? styles.arLang : ''}`}
    >
      <div
        className={`${styles.content} ${lang === 'ar' ? styles.arContent : ''}`}
      >
        <h3 className={styles.title}>{t('headerContent.title')}</h3>
        <h1 className={styles.headTitle}>{t('headerContent.headTitle')}</h1>
        <p className={styles.paragraph}>
          {t('headerContent.paragraph')}
          <br />
          {t('headerContent.subParagraph')}
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import SectionCard from '../../common/SectionCard';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

export default function FooterSection() {
  const { t } = useTranslation();
  return (
    <div className={styles.galleryImage}>
      <img src='/src/assets/footer-image.png' alt='' />
    </div>
  );
}

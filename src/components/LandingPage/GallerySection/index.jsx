import React from 'react';
import SectionCard from '../../common/SectionCard';
import SectionHeader from '../../common/SectionHeader';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

export default function GallerySection() {
  const { t } = useTranslation();
  return (
    <SectionCard>
      <SectionHeader title={t('gallery.title')} />
      <div className={styles.galleryImage}>
        <img src='/src/assets/gallery-image.png' alt='' />
      </div>
    </SectionCard>
  );
}

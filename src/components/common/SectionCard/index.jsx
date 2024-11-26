import React from 'react';
import styles from './index.module.scss';
export default function SectionCard({ children }) {
  return <div className={styles.container}>{children}</div>;
}

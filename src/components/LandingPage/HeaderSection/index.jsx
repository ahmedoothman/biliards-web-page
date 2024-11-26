import React from 'react';
import NavBar from './components/NavBar';
import HeaderContent from './components/HeaderContent';
import styles from './index.module.scss';
export default function HeaderSection() {
  return (
    <div className={styles.container}>
      <NavBar />
      <HeaderContent />
    </div>
  );
}

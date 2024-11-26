import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeLanguage } from '../../../../../i18n';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './index.module.scss';
export default function NavBar() {
  const lang = useSelector((state) => state.uiSlice.lang);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    changeLanguage(lang);
  }, [lang]);

  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.imgContainer}>
          <img src='/src/assets/AppLogo.png' alt='logo' />
        </div>
      </div>

      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div
        className={`${styles.links} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ''
        }`}
      >
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {t('navBar.home')}
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {t('navBar.about')}
        </NavLink>
        <NavLink
          to='/live'
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {t('navBar.live')}
        </NavLink>
        <NavLink
          to='/media'
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {t('navBar.media')}
        </NavLink>
        <NavLink
          to='/matches'
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {t('navBar.matches')}
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {t('navBar.contact')}
        </NavLink>
      </div>

      <div className={styles.languageSelector}>
        <select value={lang} onChange={(e) => changeLanguage(e.target.value)}>
          <option value='en'>EN</option>
          <option value='ar'>AR</option>
        </select>
      </div>
    </div>
  );
}

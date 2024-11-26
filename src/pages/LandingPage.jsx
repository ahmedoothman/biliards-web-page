import React from 'react';
import styles from './LandingPage.module.scss';
import HeaderSection from '../components/LandingPage/HeaderSection';
import About from '../components/LandingPage/AboutSection';
import LiveSection from '../components/LandingPage/LiveSection';
import UpcommingSection from '../components/LandingPage/Upcoming';
import TopPlayerSection from '../components/LandingPage/TopPlayersSections';
import NewsSection from '../components/LandingPage/NewsSection';
import ParticipantsSection from '../components/LandingPage/ParticipantsSection';
import AboutGameSection from '../components/LandingPage/AboutGameSection';
import GallerySection from '../components/LandingPage/GallerySection';
import OrganizersSection from '../components/LandingPage/OrganizersSection';
import FooterSection from '../components/LandingPage/FooterSection';
function LandingPage() {
  return (
    <div className={styles.container}>
      <HeaderSection />
      <div className={styles.mainContent}>
        <About />
        <LiveSection />
        <UpcommingSection />
        <TopPlayerSection />
        <NewsSection />
        <ParticipantsSection />
      </div>
      <AboutGameSection />
      <GallerySection />
      <OrganizersSection />
      <FooterSection />
    </div>
  );
}

export default LandingPage;

import React from 'react';
import styles from './index.module.scss';
import SectionHeader from '../../common/SectionHeader';
import SectionCard from '../../common/SectionCard';
import { useTranslation } from 'react-i18next';
import HeadlineCard from './components/HeadlineCard';
import SideCard from './components/SideCard';
const headlineData = {
  title: 'Headline Title',
  description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
  date: '2021-09-01',
  image: '/src/assets/news-image-full.png',
};

const sideData = [
  {
    title: 'Side Title 1',
    date: '2021-09-01',
    image: '/src/assets/side-video-cover.png',
  },
  {
    title: 'Side Title 2',
    date: '2021-09-01',
    image: '/src/assets/side-video-cover.png',
  },
];
export default function NewsSection() {
  const { t } = useTranslation();
  return (
    <SectionCard>
      <SectionHeader
        title={t('news.title')}
        actionTitle={t('news.seeMore')}
        moreAction={() => {
          console.log('more news');
        }}
      />
      <div className={styles.newsContainer}>
        <div className={styles.headline}>
          <HeadlineCard data={headlineData} />
        </div>
        <div className={styles.sideNews}>
          {sideData.map((data, index) => (
            <SideCard key={index} data={data} />
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

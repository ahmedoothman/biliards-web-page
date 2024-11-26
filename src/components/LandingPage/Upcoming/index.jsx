import React from 'react';
import styles from './index.module.scss';
import MatchComponent from '../../common/MatchComponent';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import SectionHeader from '../../common/SectionHeader';
import SectionCard from '../../common/SectionCard';
const matchesData = [
  {
    player1: {
      name: 'Player Name 1',
      photo:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop',
    },
    player2: {
      name: 'Player Name 2',
      photo:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop',
    },
    time: '7:00pm',
  },
  {
    player1: {
      name: 'Player Name 3',
      photo:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop',
    },
    player2: {
      name: 'Player Name 4',
      photo:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop',
    },
    time: '8:00pm',
  },
];

export default function UpcommingSection() {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.uiSlice.lang);
  return (
    <SectionCard>
      <SectionHeader title={t('matches.upcoming')} />
      <div className={styles.matchesContainer}>
        {matchesData.map((match, index) => (
          <MatchComponent
            key={index}
            live={false}
            player1={match.player1}
            player2={match.player2}
            time={match.time}
          />
        ))}
      </div>
    </SectionCard>
  );
}

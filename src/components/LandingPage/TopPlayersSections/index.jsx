import React from 'react';
import styles from './index.module.scss';
import SectionHeader from '../../common/SectionHeader';
import SectionCard from '../../common/SectionCard';
import PlayerCard from './components/PalyerCard';
import { useTranslation } from 'react-i18next';
const playersData = [
  {
    name: 'Player 1',
    photo: '/src/assets/top-player-photo.png',
    points: 100,
    wins: 3,
  },
  {
    name: 'Player 2',
    photo: '/src/assets/top-player-photo.png',
    points: 90,
    wins: 2,
  },
  {
    name: 'Player 3',
    photo: '/src/assets/top-player-photo.png',
    points: 80,
    wins: 1,
  },
];
export default function TopPlayerSection() {
  const { t } = useTranslation();
  return (
    <SectionCard>
      <SectionHeader
        title={t('topPlayers.title')}
        actionTitle={t('topPlayers.actionTitle')}
        moreAction={() => {
          console.log('More Action');
        }}
      />
      <div className={styles.playersContainer}>
        {playersData.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
    </SectionCard>
  );
}

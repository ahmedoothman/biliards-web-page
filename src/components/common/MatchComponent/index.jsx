import React from 'react';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

export default function MatchComponent({
  live = true,
  player1,
  player2,
  time = '7:00pm',
}) {
  const { t } = useTranslation();
  return (
    <div>
      <div className={live ? styles.liveMatchContainer : styles.matchContainer}>
        <div className={styles.playerContainer}>
          <img src={player1.photo} alt={player1.name} />
          <p>{player1.name}</p>
        </div>
        <div className={styles.spacer}>
          <div className={styles.vs}>
            <p>{t('matches.vs')}</p>
          </div>
          <div className={styles.status}>
            <p>{live ? t('matches.live') : time}</p>
          </div>
        </div>
        <div className={styles.playerContainer}>
          <img src={player2.photo} alt={player2.name} />
          <p>{player2.name}</p>
        </div>
      </div>
    </div>
  );
}

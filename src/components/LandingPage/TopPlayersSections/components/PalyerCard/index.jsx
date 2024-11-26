import React from 'react';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function PlayerCard({ player }) {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.uiSlice.lang);
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={player.photo} alt={player.name} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          <p>{player.name}</p>
        </div>
      </div>

      <div
        className={`${styles.footer}
        ${lang === 'ar' ? styles.arFooter : ''}
        `}
      >
        <div className={styles.points}>
          <p>
            {player.points} {t('topPlayers.points')}
          </p>
        </div>
        <div className={styles.wins}>
          <p>
            {player.wins} {t('topPlayers.wins')}
          </p>
        </div>
      </div>
    </div>
  );
}

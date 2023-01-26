import React, { FC } from 'react';

import { ICombatant } from '../../../../../../Types';

import styles from './BioInfo.module.css';

interface CombatantItemProps {
  char: ICombatant;
}

const BioInfo: FC<CombatantItemProps> = ({char}) => {

  return (
    <section className={styles.charCard}>
      <img 
        className={styles.expandImg}
        alt='character' 
        src={char.picUrl}
      />
      <div className={styles.charInfo}>
        <h3 className={styles.charName}>{char.name}</h3>
        <h4 className={styles.charBg}>{char.race} {char.background}</h4>
        <h4 className={styles.charClass}>Level {char.level} - {char.class}</h4>
        <h5 className={styles.alignment}>{char.alignment}</h5>
      </div>
    </section>
  )
}

export default BioInfo;
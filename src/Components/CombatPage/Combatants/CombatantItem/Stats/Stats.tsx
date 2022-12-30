import React from 'react';

import styles from './Stats.module.css';

const Stats = ({char}:any) => {

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Ability Scores:</h4>
      <div className={styles.scoreList}>
        <p className={styles.score}>{char.strength}</p>
        <p className={styles.score}>{char.dexterity}</p>
        <p className={styles.score}>{char.constitution}</p>
      </div>
      <div className={styles.scoreList}>
        <p className={styles.score}>{char.intelligence}</p>
        <p className={styles.score}>{char.wisdom}</p>
        <p className={styles.score}>{char.charisma}</p>
      </div>
    </div>
  )
}

export default Stats;
import React from 'react';

import styles from './TurnTracker.module.css';

const TurnTracker: any = ({turn, setTurn}: any) => {

  return (
    <section className={styles.container}>
      <div>
        <label>Battle:</label>
        <h2 className={styles.battleName}>Riverside Melee</h2>
      </div>
      <div>
        <label>Current Combatant:</label>
        <h2 className={styles.currentCharacter}>{turn}</h2>
      </div>
      <button className={styles.button}>End Turn</button>
    </section>
  )
}

export default TurnTracker;

import React, { useState } from 'react';

import styles from './CombatantItem.module.css';


const CombatantItem = ({char}:any) => {
  const [clicked, setClicked] = useState(false);

  if(!clicked) {
    return (
      <div className={styles.combatantContainer} onClick={() => setClicked(true)}>
        <img 
          className={styles.smallImg}
          alt='character' 
          src={char.picUrl}
        />
        <p className={styles.name}>{char.name}</p>
      </div>
    )
  } else {
    return (
      <div className={styles.expandContainer} onClick={() => setClicked(false)}>
        <div className={styles.charCard}>
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
        </div>
        <div className={styles.achp}>
          <h2 className={styles.ac}>{char.armorClass}</h2>
          <div className={styles.hpBox}>
            <div className={styles.hp}>
              <h3 className={styles.hpNums}>{char.currentHP}</h3>
              <h3> / </h3>
              <h3 className={styles.hpNums}>{char.maxHP}</h3>
            </div>
          </div>
          <div className={styles.conditions}>
            <h3 className={styles.poison}>P</h3>
            <h3 className={styles.charm}>Ch</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default CombatantItem;
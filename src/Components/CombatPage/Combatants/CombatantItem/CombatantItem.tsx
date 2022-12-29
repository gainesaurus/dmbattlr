import React, { useState } from 'react';

import CombatantInfo from './CombatantInfo/CombatantInfo';

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
        <CombatantInfo char={char}/>
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
import React, { useState } from 'react';

import BioInfo from './BioInfo/BioInfo';
import Stats from './Stats/Stats';
import WeaponList from './Weapons/WeaponList';

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
        <BioInfo char={char}/>
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
            <h3 className={styles.poison} title='poisoned'>P</h3>
            <h3 className={styles.charm} title='charmed'>Ch</h3>
          </div>
        </div>
        <Stats char={char}/>
        <WeaponList />
      </div>
    )
  }
}

export default CombatantItem;
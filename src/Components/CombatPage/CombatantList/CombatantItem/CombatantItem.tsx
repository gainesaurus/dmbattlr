import React, { useState } from 'react';

import BioInfo from './BioInfo/BioInfo';
import Stats from './Stats/Stats';
import WeaponList from './WeaponList/WeaponList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faHeart, faDiamond } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { RunCircle } from '@mui/icons-material';

import styles from './CombatantItem.module.css';
import ConditionList from './ConditionList/ConditionList';
import SpellList from './SpellList/SpellList';


const CombatantItem = ({char}:any) => {
  const [clicked, setClicked] = useState(false);

  library.add(faS, faHeart, faDiamond);

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
          <h2 className={styles.ac} title="armor class">{char.armorClass}</h2>
          <div className={styles.hpBox} title="health points">
            <FontAwesomeIcon icon={["fas", "heart"]} />
            <div className={styles.hp}>
              <h3 className={styles.hpCurrent}>{char.currentHP}/ </h3>
              <h3 className={styles.hpTotal}>{char.maxHP}</h3>
            </div>
          </div>
          <div className={styles.speedBox} title="speed">
            <RunCircle className={styles.speedIcon} fontSize='inherit'/>
            <h3 className={styles.speed}>{char.speed}</h3>
          </div>
          <div className={styles.initBox}>
            <FontAwesomeIcon icon={["fas", "diamond"]} />
            <h3 className={styles.init} title="initiative">{char.initiative}</h3>
            <p className={styles.descriptor}>initiative</p>
          </div>
        </div>
        <ConditionList />
        <Stats char={char}/>
        <WeaponList weapon={char.weapon}/>
        <SpellList spells={char.spells}/>
      </div>
    )
  }
}

export default CombatantItem;
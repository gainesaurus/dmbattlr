import React, { useState, FC } from 'react';

import BioInfo from './BioInfo/BioInfo';
import AcHpList from './AcHpList/AcHpList';
import ConditionList from './ConditionList/ConditionList';
import Stats from './Stats/Stats';
import WeaponList from './WeaponList/WeaponList';
// import SpellList from './SpellList/SpellList';
import { ICombatant } from '../../../../../Types';

import styles from './CombatantItem.module.css';


interface CombatantItemProps {
  char: ICombatant;
  turn: ICombatant;
}

const CombatantItem: FC<CombatantItemProps> = ({char, turn}) => {
  const [clicked, setClicked] = useState(false);

  if(!clicked) {
    return (
      <section className={styles.combatantContainer} onClick={() => setClicked(true)}>
        <img 
          className={styles.smallImg}
          alt='character' 
          src={char.picUrl}
        />
        <p className={styles.name}>{char.name}</p>
      </section>
    )
  } else {
    return (
      <section className={styles.expandContainer} onClick={() => setClicked(false)}>
        <BioInfo char={char}/>
        <AcHpList char={char} />
        <ConditionList />
        <Stats char={char}/>
        <WeaponList weapons={char.weapons}/>
        {/* <SpellList spell={char.spells}/> */}
      </section>
    )
  }
}

export default CombatantItem;
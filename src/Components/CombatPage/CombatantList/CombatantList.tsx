import React from 'react';
import CombatantItem from './CombatantItem/CombatantItem';

import styles from './CombatantList.module.css';
import { ICombatant } from '../../../../Types';


const CombatantList = ({combatants}:any) => {
  let sortedCombatants = combatants.sort((pc1:any, pc2:any) => (pc1.initiative < pc2.initiative) ? 1 : (pc1.initiative > pc2.initiative) ? -1 : 0);

  return (
    <div className={styles.listContainer}>
      {sortedCombatants.map((char: any) => <CombatantItem char={char}/>)}
    </div>
  )
}

export default CombatantList;
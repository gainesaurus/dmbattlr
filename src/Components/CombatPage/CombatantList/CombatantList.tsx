import React from 'react';
import CombatantItem from './CombatantItem/CombatantItem';
import { mockPcs } from '../../../mocks/mockPcs';

import styles from './CombatantList.module.css';


const CombatantList = () => {
  let sortedCombatants = mockPcs.sort((pc1, pc2) => (pc1.initiative < pc2.initiative) ? 1 : (pc1.initiative > pc2.initiative) ? -1 : 0);

  return (
    <div className={styles.listContainer}>
      {sortedCombatants.map(mock => <CombatantItem char={mock}/>)}
    </div>
  )
}

export default CombatantList;
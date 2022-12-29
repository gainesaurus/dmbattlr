import React from 'react';
import CombatantItem from '../CombatantItem/CombatantItem';
import { mockPcs } from '../../../../mocks/mockPcs';

import styles from './CombatantList.module.css';


const CombatantList = () => {

  return (
    <div className={styles.listContainer}>
      {mockPcs.map(mock => <CombatantItem char={mock}/>)}
    </div>
  )
}

export default CombatantList;
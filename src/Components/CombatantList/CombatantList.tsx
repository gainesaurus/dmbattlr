import React from 'react';
import { PersonAdd } from '@mui/icons-material';
import CombatantItem from '../CombatantItem/CombatantItem';
import { mockPcs } from '../../mocks/mockPcs';

import styles from './CombatantList.module.css';



const CombatantList = () => {

  return (
    <div className={styles.listContainer}>
      {mockPcs.map(mock => <CombatantItem char={mock}/>)}
      <button className={styles.addCombatant}>
        <PersonAdd />
      </button>
    </div>
  )
}

export default CombatantList;
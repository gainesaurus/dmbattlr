import React, { useState } from 'react';

import CombatTimeLine from './CombatTimeLine/CombatTimeLine';
import CombatantList from './CombatantList/CombatantList';
import AddCombatant from './AddCombatant/AddCombatant';
import { mockPcs } from '../../mocks/mockPcs';

import styles from './CombatPage.module.css';
import SearchCombatant from './SearchCombatant/SearchCombatant';
import { ICombatant } from '../../../Types';

const CombatPage = () => {
  const [combatants, setCombatants] = useState(mockPcs);

  return (
      <div className={styles.page}>
        <div className={styles.combatants}>
          <AddCombatant />
          <CombatantList combatants={combatants} />
        </div>
        <SearchCombatant combatants={combatants} setCombatants={setCombatants} />
        <div className={styles.timeline} >
          <CombatTimeLine />
        </div>
      </div>
  )
}

export default CombatPage;
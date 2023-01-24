import React, { useState } from 'react';

import CombatTimeLine from './CombatTimeLine/CombatTimeLine';
import CombatantList from './CombatantList/CombatantList';
import AddCombatant from './AddCombatant/AddCombatant';
import SearchCombatant from './SearchCombatant/SearchCombatant';
import { mockPcs } from '../../mocks/mockPcs';

import styles from './CombatPage.module.css';


const CombatPage = () => {
  const [combatants, setCombatants] = useState(mockPcs);
  const [showSearchForm, setShowSearchForm] = useState(false);

  return (
      <div className={styles.page}>
        <div className={styles.combatants}>
          <AddCombatant setShowSearchForm={setShowSearchForm}/>
          <CombatantList combatants={combatants} />
        </div>
        {showSearchForm
        ? <SearchCombatant
            showSearchForm={showSearchForm}
            setShowSearchForm={setShowSearchForm}
            combatants={combatants}
            setCombatants={setCombatants} />
        : null
        }
        <div className={styles.timeline} >
          <CombatTimeLine />
        </div>
      </div>
  )
}

export default CombatPage;
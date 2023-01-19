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
  const [showSearchForm, setShowSearchForm] = useState(false);

  return (
      <div className={styles.page}>
        <div className={styles.combatants}>
          <AddCombatant setAddClicked={setShowSearchForm}/>
          <CombatantList combatants={combatants} />
        </div>
        {showSearchForm
        ? <SearchCombatant
            showSearchForm={showSearchForm}
            setAddClicked={setShowSearchForm}
            combatants={combatants}
            setCombatants={setCombatants} />
        : <></>
        }
        <div className={styles.timeline} >
          <CombatTimeLine />
        </div>
      </div>
  )
}

export default CombatPage;
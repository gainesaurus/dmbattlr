import React, { useState, useEffect } from 'react';

import CombatTimeLine from './CombatTimeLine/CombatTimeLine';
import CombatantList from './CombatantList/CombatantList';
import AddCombatant from './AddCombatant/AddCombatant';
import SearchCombatant from './SearchCombatant/SearchCombatant';
import TurnTracker from './TurnTracker/TurnTracker';
import { mockPcs } from '../../mocks/mockPcs';

import styles from './CombatPage.module.css';


const CombatPage = () => {
  const [combatants, setCombatants] = useState(mockPcs);
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [turn, setTurn] = useState(combatants[0].name);

  useEffect(() => {
    let sortedCombatants = combatants.sort((pc1:any, pc2:any) => (pc1.initiative < pc2.initiative) ? 1 : (pc1.initiative > pc2.initiative) ? -1 : 0);
    setCombatants(sortedCombatants);
  }, [combatants])

  return (
    <div className={styles.container}>
      <section className={styles.turnTracker}>
        <TurnTracker turn={turn} setTurn={setTurn}/>
      </section>
      <section className={styles.page}>
        <div className={styles.combatants}>
          <AddCombatant setShowSearchForm={setShowSearchForm}/>
          <CombatantList combatants={combatants} turn={turn} />
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
      </section>
    </div>
  )
}

export default CombatPage;
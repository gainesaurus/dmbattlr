import React from 'react';

import CombatTimeLine from '../CombatTimeLine/CombatTimeLine';
import CombatantList from '../CombatantList/CombatantList';

import styles from './CombatPage.module.css';

const CombatPage = () => {

  return (
      <div className={styles.page}>
        <div className={styles.center}>
          <CombatantList />
        </div>
        <CombatTimeLine />
      </div>
  )
}

export default CombatPage;
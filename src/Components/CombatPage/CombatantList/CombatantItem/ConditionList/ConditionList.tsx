import React from 'react';

import styles from './ConditionList.module.css';

const ConditionList = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Conditions:</h4>
      <div className={styles.conditions}>
        <h3 className={styles.poison} title='poisoned'>P</h3>
        <h3 className={styles.charm} title='charmed'>Ch</h3>
      </div>
    </div>
  )
}

export default ConditionList;
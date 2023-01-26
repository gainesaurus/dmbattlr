import React from 'react';

import styles from './ConditionList.module.css';

const ConditionList = () => {
  return (
    <section className={styles.container}>
      <label className={styles.title}>Conditions:</label>
      <ul className={styles.conditions}>
        <li className={styles.poison} title='poisoned'>P</li>
        <li className={styles.charm} title='charmed'>Ch</li>
      </ul>
    </section>
  )
}

export default ConditionList;
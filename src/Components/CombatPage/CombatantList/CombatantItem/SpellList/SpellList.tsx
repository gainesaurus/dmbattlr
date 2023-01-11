import React from 'react';

import styles from './SpellList.module.css';

const SpellList = (spells:any) => {

  return (
    <div className={styles.container}>
    <h4 className={styles.title}>Spells:</h4>
    <div className={styles.list}>
      {/* {mockSpells.map(mock => <SpellItem spell={mock}/>)} */}
    </div>
  </div>
  )
}

export default SpellList;
import React from 'react';

import styles from './WeaponItem.module.css';

const WeaponItem = ({weapon}:any) => {

  return (
    <div className={styles.container}>
      <img
        src={weapon.picUrl}
        className={styles.pic}
        alt="long sword" />
      <p className={styles.info}>(+{weapon.modifier})</p>
      <p className={styles.info}>{weapon.damage}</p>
      <p className={styles.info}>{weapon.damageType}</p>
    </div>
  )
}

export default WeaponItem;
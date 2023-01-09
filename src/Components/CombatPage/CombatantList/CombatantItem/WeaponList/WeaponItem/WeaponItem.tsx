import React, {FC} from 'react';

import { IWeaponItem } from '../../../../../../../Types';

import styles from './WeaponItem.module.css';

interface WeaponItemProps {
  weapon: IWeaponItem;
}

const WeaponItem:FC<WeaponItemProps> = ({ weapon }) => {

  return (
    <div className={styles.container}>
      <img
        src={weapon.picUrl}
        className={styles.pic}
        alt="long sword" />
      <div className={styles.weaponTag}>
        <h4 className={styles.weaponName}>{weapon.name}</h4>
        <div className={styles.infoContainer}>
          <p className={styles.info}>(+{weapon.modifier})</p>
          <p className={styles.info}>{weapon.damage}</p>
          <p className={styles.info}>{weapon.damageType}</p>
        </div>
      </div>
    </div>
  )
}

export default WeaponItem;
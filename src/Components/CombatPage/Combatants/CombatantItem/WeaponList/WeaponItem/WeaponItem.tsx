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
      <p className={styles.info}>(+{weapon.modifier})</p>
      <p className={styles.info}>{weapon.damage}</p>
      <p className={styles.info}>{weapon.damageType}</p>
    </div>
  )
}

export default WeaponItem;
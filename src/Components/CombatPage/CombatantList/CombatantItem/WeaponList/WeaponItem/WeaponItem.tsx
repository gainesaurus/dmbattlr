import {FC} from 'react';

import { IWeaponItem } from '../../../../../../../Types';

import styles from './WeaponItem.module.css';

interface WeaponItemProps {
  weapon: IWeaponItem;
}

const WeaponItem:FC<WeaponItemProps> = ({ weapon }) => {

  return (
    <section className={styles.container}>
      <img
        src={weapon.picUrl}
        className={styles.pic}
        alt="long sword" />
      <div className={styles.weaponTag}>
        <label className={styles.weaponName}>{weapon.name}</label>
        <div className={styles.infoContainer}>
          <p className={styles.info}>(+{weapon.modifier})</p>
          <p className={styles.info}>{weapon.damage}</p>
          <p className={styles.info}>{weapon.damageType}</p>
        </div>
      </div>
    </section>
  )
}

export default WeaponItem;
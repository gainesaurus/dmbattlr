import React, {FC} from 'react';

import WeaponItem from './WeaponItem/WeaponItem';
import { mockWeapons } from '../../../../../mocks/mockWeapons';
import { IWeaponItem } from '../../../../../../Types';

import styles from './WeaponList.module.css';

interface WeaponListProps {
  weapons: IWeaponItem[];
}

const WeaponList:FC<WeaponListProps> = () => {

  return (
    <section className={styles.container}>
      <label className={styles.title}>Weapons:</label>
      <ul className={styles.list}>
        {mockWeapons.map(mock => <WeaponItem weapon={mock}/>)}
      </ul>
    </section>
  )
}

export default WeaponList;
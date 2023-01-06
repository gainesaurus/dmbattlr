import React, {FC} from 'react';

import WeaponItem from './WeaponItem/WeaponItem';
import { mockWeapons } from '../../../../../mocks/mockWeapons';
import { IWeaponItem } from '../../../../../../Types';

import styles from './WeaponList.module.css';

interface WeaponListProps {
  weapon: IWeaponItem;
}

const WeaponList:FC<WeaponListProps> = () => {

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Weapons:</h4>
      <div className={styles.list}>
      {mockWeapons.map(mock => <WeaponItem weapon={mock}/>)}
      </div>
    </div>
  )
}

export default WeaponList;
import { FC } from 'react';
import CombatantItem from './CombatantItem/CombatantItem';

import styles from './CombatantList.module.css';
import { ICombatant } from '../../../../Types';

interface CombatantListProps {
  combatants: ICombatant[];
  turn: any;
}


const CombatantList: FC<CombatantListProps> = ({combatants, turn}) => {

  return (
    <div className={styles.listContainer}>
      {combatants.map((char: any) =>
      <CombatantItem
        key={char._id}
        char={char}
        turn={turn}
      />)}
    </div>
  )
}

export default CombatantList;
import { FC } from 'react';

import { ICombatant } from '../../../../../../Types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faHeart, faDiamond } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { RunCircle } from '@mui/icons-material';

import styles from './AcHpList.module.css';

interface CombatantItemProps {
  char: ICombatant;
}

const AcHpList: FC<CombatantItemProps> = ({ char }) => {

  library.add(faS, faHeart, faDiamond);

  return (
    <section className={styles.container}>
      <h2 className={styles.ac} title="armor class">{char.armorClass}</h2>
      <div className={styles.hpBox} title="health points">
        <FontAwesomeIcon icon={["fas", "heart"]} />
        <div className={styles.hp}>
          <h3 className={styles.hpCurrent}>{char.currentHP}/ </h3>
          <h3 className={styles.hpTotal}>{char.maxHP}</h3>
        </div>
      </div>
      <div className={styles.speedBox} title="speed">
        <RunCircle className={styles.speedIcon} fontSize='inherit'/>
        <h3 className={styles.speed}>{char.speed}</h3>
      </div>
      <div className={styles.initBox}>
        <FontAwesomeIcon icon={["fas", "diamond"]} />
        <h3 className={styles.init} title="initiative">{char.initiative}</h3>
        <p className={styles.descriptor}>initiative</p>
      </div>
    </section>
  )
}

export default AcHpList;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faHandFist, faPersonFallingBurst, faBuildingColumns, faBrain, faMasksTheater, faBookBookmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Stats.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';

const Stats = ({char}:any) => {
  library.add(faS, faHandFist, faPersonFallingBurst, faBuildingColumns, faBrain, faMasksTheater, faBookBookmark);

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Ability Scores:</h4>
      <div className={styles.scoreList}>
        <div  className={styles.icon}>
          <FontAwesomeIcon icon={["fas", "hand-fist"]}/>
            <p className={styles.score}>{char.strength}</p>
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={["fas", "person-falling-burst"]}/>
            <p className={styles.score}>{char.dexterity}</p>
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={["fas", "building-columns"]}/>
            <p className={styles.score}>{char.constitution}</p>
        </div>
      </div>

      <div className={styles.scoreList}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={["fas", "brain"]} className={styles.icon}/>
          <p className={styles.score}>{char.intelligence}</p>
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={["fas", "book-bookmark"]} className={styles.icon}/>
          <p className={styles.score}>{char.wisdom}</p>
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={["fas", "masks-theater"]} className={styles.icon}/>
          <p className={styles.score}>{char.charisma}</p>
        </div>
      </div>
    </div>
  )
}

export default Stats;
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
        <FontAwesomeIcon icon={["fas", "hand-fist"]} className={styles.icon}/>
        <div className={styles.scoreContainer}>
          <p className={styles.score}>{char.strength}</p>
        </div>
        <FontAwesomeIcon icon={["fas", "person-falling-burst"]} className={styles.icon}/>
        <div className={styles.scoreContainer}>
          <p className={styles.score}>{char.dexterity}</p>
        </div>
        <FontAwesomeIcon icon={["fas", "building-columns"]} className={styles.icon}/>
        <div className={styles.scoreContainer}>
          <p className={styles.score}>{char.constitution}</p>
        </div>
      </div>
      <div className={styles.scoreList}>
        <FontAwesomeIcon icon={["fas", "brain"]} className={styles.icon}/>
        <p className={styles.score}>{char.intelligence}</p>
        <FontAwesomeIcon icon={["fas", "book-bookmark"]} className={styles.icon}/>
        <p className={styles.score}>{char.wisdom}</p>
        <FontAwesomeIcon icon={["fas", "masks-theater"]} className={styles.icon}/>
        <p className={styles.score}>{char.charisma}</p>
      </div>
    </div>
  )
}

export default Stats;
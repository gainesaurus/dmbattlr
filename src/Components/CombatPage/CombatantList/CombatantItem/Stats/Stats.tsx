import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faHandFist, faPersonFallingBurst, faBuildingColumns, faBrain, faMasksTheater, faBookBookmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Stats.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { pink } from '@mui/material/colors';

const Stats = ({char}:any) => {
  library.add(faS, faHandFist, faPersonFallingBurst, faBuildingColumns, faBrain, faMasksTheater, faBookBookmark);

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Ability Scores:</h4>
      <div className={styles.scoreList}>
        <div  className={styles.icon} title="strength">
          <FontAwesomeIcon icon={["fas", "hand-fist"]} style={{color: 'rgba(255,100,100,0.8)'}}/>
          <p className={styles.score}>{char.strength}</p>
        </div>
        <div className={styles.icon} title="dexterity">
          <FontAwesomeIcon icon={["fas", "person-falling-burst"]} style={{color: 'rgba(255, 149, 80,0.8)'}}/>
          <p className={styles.score}>{char.dexterity}</p>
        </div>
        <div className={styles.icon} title="constitution">
          <FontAwesomeIcon icon={["fas", "building-columns"]} style={{color: 'rgba(100,150,250,0.8'}}/>
          <p className={styles.score}>{char.constitution}</p>
        </div>
      </div>

      <div className={styles.scoreList}>
        <div className={styles.icon} title="intelligence" >
          <FontAwesomeIcon icon={["fas", "brain"]} style={{color: 'rgba(244, 149, 211, 0.8)'}}/>
          <p className={styles.score}>{char.intelligence}</p>
        </div>
        <div className={styles.icon} title="wisdom">
          <FontAwesomeIcon icon={["fas", "book-bookmark"]} style={{color: 'rgba(95, 200, 100, 0.8)'}}/>
          <p className={styles.score}>{char.wisdom}</p>
        </div>
        <div className={styles.icon} title="charisma">
          <FontAwesomeIcon icon={["fas", "masks-theater"]} style={{color: 'rgba(190, 120, 250, 0.8)'}}/>
          <p className={styles.score}>{char.charisma}</p>
        </div>
      </div>
    </div>
  )
}

export default Stats;
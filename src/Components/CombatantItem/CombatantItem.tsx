import React, { useState } from 'react';

import styles from './CombatantItem.module.css';


const CombatantItem = ({char}:any) => {
  const [clicked, setClicked] = useState(false);

  if(!clicked) {
    return (
      <div className={styles.combatantContainer} onClick={() => setClicked(true)}>
        <img 
          className={styles.smallImg}
          alt='character' 
          src={char.img}
        />
        <p className={styles.name}>{char.name}</p>
      </div>
    )
  } else {
    return (
      <div className={styles.expandContainer} onClick={() => setClicked(false)}>
        <div className={styles.charCard}>
          <img 
            className={styles.expandImg}
            alt='character' 
            src={char.img}
          />
          <div className={styles.charInfo}>
            <h3 className={styles.charName}>{char.name}</h3>
            <h4 className={styles.charBg}>{char.race} {char.background}</h4>
            <h4 className={styles.charClass}>Level {char.level} - {char.class}</h4>
            <h5 className={styles.alignment}>{char.alignment}</h5>
          </div>
        </div>
        <div className={styles.achp}>
          <h2 className={styles.ac}>18</h2>
          <div className={styles.hp}>
            <h3>43</h3>
            <h3> / </h3>
            <h3>67</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default CombatantItem;
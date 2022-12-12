import React from 'react';
import { PersonAdd } from '@mui/icons-material';

import styles from './CombatantList.module.css';

const CombatantList = () => {

  return (
    <div className={styles.listContainer}>
      <div className={styles.combatantContainer}>
        <img 
          className={styles.smallImg}
          alt='character' 
          src='https://i0.wp.com/dmdave.com/wp-content/uploads/2019/06/bard-dnd-psionics-3939027972-1561269692278.jpg?fit=638%2C358&ssl=1'
        />
      </div>
      <div className={styles.expandContainer}>
        <img 
          className={styles.expandImg}
          alt='character' 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOSPSq2NnB1EgsSSpsQyP0T59xvNISANu6w&usqp=CAU'
        />
        <div className={styles.charInfo}>
          <h3 className={styles.charName}>Grimgar the Strange</h3>
          <h4 className={styles.charBg}>Human Entertainer</h4>
          <h4 className={styles.charClass}>Level 8 - Undead Warlock</h4>
        </div>
      </div>
      <div className={styles.combatantContainer}>
        <img 
          className={styles.smallImg}
          alt='character' 
          src='https://w0.peakpx.com/wallpaper/320/663/HD-wallpaper-late-for-work-today-artist-artwork-digital-art-artstation.jpg'
        />
      </div>
      <div className={styles.combatantContainer}>
        <img 
          className={styles.smallImg}
          alt='character' 
          src='https://i.pinimg.com/originals/32/31/9d/32319d699b3fec0cfc1bcfcd3b367066.jpg'
        />
      </div>
      <div className={styles.combatantContainer}>
        <img 
          className={styles.smallImg}
          alt='character' 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRD80iVz0Og2e8DG3bFpVtnUNLXKnlIG4OLQ&usqp=CAU'
        />
      </div>
      <div className={styles.addCombatant}>
        <PersonAdd />
      </div>
    </div>
  )
}

export default CombatantList;
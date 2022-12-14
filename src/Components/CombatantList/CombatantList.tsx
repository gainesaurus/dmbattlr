import React from 'react';
import { PersonAdd } from '@mui/icons-material';
import CombatantItem from '../CombatantItem/CombatantItem';

import styles from './CombatantList.module.css';

//mock data
const mockPcs = [
  {
    name: 'Lady Bard',
    race: 'Half-Elf',
    background: 'Charlatan',
    img: 'https://i0.wp.com/dmdave.com/wp-content/uploads/2019/06/bard-dnd-psionics-3939027972-1561269692278.jpg?fit=638%2C358&ssl=1',
    level: '8',
    class: 'Lore Bard',
    alignment: 'chaotic good',
  },
  {
    name: 'Grimgar the Strange',
    race: 'Human',
    background: 'Entertainer',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOSPSq2NnB1EgsSSpsQyP0T59xvNISANu6w&usqp=CAU',
    level: '8',
    class: 'Undead Warlock',
    alignment: 'chaotic neutral',
  },
  {
    name: 'Gemgold',
    race: 'Halfling',
    background: 'Thief',
    img: 'https://w0.peakpx.com/wallpaper/320/663/HD-wallpaper-late-for-work-today-artist-artwork-digital-art-artstation.jpg',
    level: '8',
    class: 'Rogue',
    alignment: 'chaotic good',
  },
  {
    name: 'Heiderfleiderflaus',
    race: 'Wood Elf',
    background: 'Hermit',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRD80iVz0Og2e8DG3bFpVtnUNLXKnlIG4OLQ&usqp=CAU',
    level: '8',
    class: 'Circle of the Moon Druid',
    alignment: 'chaotic good',
  },
];

const CombatantList = () => {

  return (
    <div className={styles.listContainer}>
      {mockPcs.map(mock => <CombatantItem char={mock}/>)}
      <div className={styles.addCombatant}>
        <PersonAdd />
      </div>
    </div>
  )
}

export default CombatantList;
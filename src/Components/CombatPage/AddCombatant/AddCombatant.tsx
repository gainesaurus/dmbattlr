import React from 'react';
import { PersonAdd } from '@mui/icons-material';

import styles from './AddCombatant.module.css';


const AddCombatant = ({setShowSearchForm}:any) => {

  const handleClick = () => {
    setShowSearchForm(true)
  }

  return (
    <button className={styles.addCombatant} onClick={handleClick} >
      <PersonAdd />
    </button>
  )
}

export default AddCombatant;
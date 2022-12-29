import React from 'react';
import { PersonAdd } from '@mui/icons-material';

import styles from './AddCombatant.module.css';

const AddCombatant = () => {

  return (
    <button className={styles.addCombatant}>
      <PersonAdd />
    </button>
  )
}

export default AddCombatant;
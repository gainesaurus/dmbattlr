import React from "react";
import { Castle } from '@mui/icons-material';

import styles from './NavBar.module.css';

const NavBar = () => {


  return (
    <div className={styles.navContainer}>
      <Castle />
    </div>
  )
}

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import { Castle, AccountCircle, AutoFixHigh, Groups3, SportsMartialArts, Pets } from '@mui/icons-material';

import styles from './NavBar.module.css';

const NavBar = () => {


  return (
    <div className={styles.navContainer}>
      <div className={styles.icons}>
        <Link to='/profile' className={styles.navIcon}>
          <AccountCircle />
        </Link>
        <Link to='/home' className={styles.navIcon}>
          <Castle />
        </Link>
        <Link to='/pcs' className={styles.navIcon}>
          <Groups3 />
        </Link>
        <Link to='/abilities' className={styles.navIcon}>
          <SportsMartialArts />
        </Link>
        <Link to='/spells' className={styles.navIcon}>
          <AutoFixHigh />
        </Link>
        <Link to='/monsters' className={styles.navIcon}>
          <Pets />
        </Link>
      </div>
    </div>
  )
}

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import { Castle, AccountCircle, AutoFixHigh, Groups3, SportsMartialArts, Pets } from '@mui/icons-material';

import styles from './NavBar.module.css';

const NavBar = () => {


  return (
    <div className={styles.navContainer}>
      <div className={styles.icons}>
        <Link to='/profile' className={styles.navIcon} title='profile'>
          <AccountCircle />
        </Link>
        <Link to='/home' className={styles.navIcon} title='home'>
          <Castle />
        </Link>
        <Link to='/pcs' className={styles.navIcon} title='PC List'>
          <Groups3 />
        </Link>
        <Link to='/abilities' className={styles.navIcon} title='abilities'>
          <SportsMartialArts />
        </Link>
        <Link to='/spells' className={styles.navIcon} title='spells'>
          <AutoFixHigh />
        </Link>
        <Link to='/monsters' className={styles.navIcon} title='monsters'>
          <Pets />
        </Link>
      </div>
    </div>
  )
}

export default NavBar;
import { Link } from 'react-router-dom';
import { Castle, AccountCircle, DynamicForm, AutoFixHigh, Groups3, SportsMartialArts, Pets } from '@mui/icons-material';

import styles from './NavBar.module.css';


const NavBar = () => {

  return (
    <nav className={styles.navContainer}>
      <div className={styles.icons}>
        <Link to='/home' className={styles.navIcon} title='home'>
          <Castle />
        </Link>
        <Link to='/battles' className={styles.navIcon} title='battles'>
          <DynamicForm />
        </Link>
        <Link to='/pcs' className={styles.navIcon} title='PC List'>
          <Groups3 />
        </Link>
        <Link to='/monsters' className={styles.navIcon} title='monsters'>
          <Pets />
        </Link>
        <Link to='/abilities' className={styles.navIcon} title='abilities'>
          <SportsMartialArts />
        </Link>
        <Link to='/spells' className={styles.navIcon} title='spells'>
          <AutoFixHigh />
        </Link>
        <Link to='/profile' className={styles.navIcon} title='profile'>
          <AccountCircle />
        </Link>
      </div>
    </nav>
  )
}

export default NavBar;
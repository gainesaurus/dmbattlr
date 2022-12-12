import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import CombatTimeLine from './Components/CombatTimeLine/CombatTimeLine';
import styles from './App.module.css';
import CombatantList from './Components/CombatantList/CombatantList';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.page}>
        <div className={styles.center}>
          <CombatantList />
        </div>
        <CombatTimeLine />
      </div>
    </div>
  );
}

export default App;

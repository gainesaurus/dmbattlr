import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import CombatPage from './Components/CombatPage/CombatPage';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <NavBar />
        <Routes>
          <Route path="/" element={<CombatPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import CombatPage from './Components/CombatPage/CombatPage';
import BattleListPage from './Components/BattleListPage/BattleListPage';
import PCListPage from './Components/PCListPage/PCListPage';
import MonstersPage from './Components/MonstersPage/MonstersPage';
import AbilitiesPage from './Components/AbilitiesPage/AbilitiesPage';
import SpellsPage from './Components/SpellsPage/SpellsPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <NavBar />
        <Routes>
          <Route path="/" element={<CombatPage />} />
          <Route path="/battles" element={<BattleListPage />} />
          <Route path="/pcs" element={<PCListPage />} />
          <Route path="/monsters" element={<MonstersPage />} />
          <Route path="/abilities" element={<AbilitiesPage />} />
          <Route path="/spells" element={<SpellsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

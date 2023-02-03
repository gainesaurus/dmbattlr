import React, { useState } from 'react';

import { mockPcs } from '../../../mocks/mockPcs';
import BioInfo from '../CombatantList/CombatantItem/BioInfo/BioInfo';

import styles from './SearchCombatant.module.css';

const SearchCombatant = ({ combatants, setCombatants, setShowSearchForm }: any) => {
  const [pcList, setPcList] = useState(mockPcs);
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e:any) => {
    e.preventDefault();
      setSearchInput(e.target.value);
  };

  if (searchInput.length > 0 ) {
    pcList.filter((char) => {
      return char.name.match(searchInput);
    });
  };



  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <input
          className={styles.input}
          type="search"
          placeholder="Find a Combatant"
          value={searchInput}
          onChange={handleChange}
        />
      </header>
      <div className={styles.searchResults}>
        {pcList.map((char) => 
          <BioInfo key={char._id} char={char} combatants={combatants} setCombatants={setCombatants}/>)}
      </div>
      <footer className={styles.footer}>
        <button>Add Combatant</button>
        <button className={styles.button} onClick={() => setShowSearchForm(false)}>Close</button>
      </footer>
    </section>
  )
}

export default SearchCombatant;
import React, { useState } from 'react';

import { mockPcs } from '../../../mocks/mockPcs';
import BioInfo from '../CombatantList/CombatantItem/BioInfo/BioInfo';

import styles from './SearchCombatant.module.css';

const SearchCombatant = ({ combatants, setCombatants, setShowSearchForm }: any) => {
  // const [searchInput, setSearchInput] = useState('');
  const [searchOptions, setSearchOptions] = useState(mockPcs);

  const handleChange = (e:any) => {
    e.preventDefault();
    setSearchOptions(searchOptions.filter((char) => char.name.match(e.target.value)));
  }

  const handleClose = () => {
    setShowSearchForm(false);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <input
          className={styles.input}
          type="search"
          placeholder="Find a Combatant"
          onChange={()=>handleChange}
        />
      </header>
      <div className={styles.searchResults}>
        {searchOptions.map((char) => <BioInfo char={char}/>)}
      </div>
      <footer className={styles.footer}>
        <button>Add Combatant</button>
        <button className={styles.button} onClick={handleClose}>Close</button>
      </footer>
    </div>
  )
}

export default SearchCombatant;
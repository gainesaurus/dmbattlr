import React, { useState } from 'react';

import { mockPcs } from '../../../mocks/mockPcs';
import BioInfo from '../CombatantList/CombatantItem/BioInfo/BioInfo';

import styles from './SearchCombatant.module.css';

const SearchCombatant = ({ combatants, setCombatants, showSearchForm, setShowSearchForm }: any) => {
  // const [searchInput, setSearchInput] = useState('');
  const [searchOptions, setSearchOptions] = useState(mockPcs);

  const handleChange = (e:any) => {
    e.preventDefault();
    setSearchOptions(searchOptions.filter((char) => char.name.match(e.target.value)));
  }

  const handleCancel = () => {
    setShowSearchForm(false);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="search"
        placeholder="Search here"
        onChange={()=>handleChange}
      />
      {searchOptions.map((char) => <BioInfo char={char}/>)}
      <button className={styles.button} onClick={()=>handleCancel}>Cancel</button>
    </div>
  )
}

export default SearchCombatant;
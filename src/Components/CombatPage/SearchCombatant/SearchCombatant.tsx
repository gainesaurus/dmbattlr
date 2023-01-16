import React, { useState } from 'react';

const SearchCombatant = ({ combatants, setCombatants }: any) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e:any) => {
    e.preventDefault();
    setSearchInput(e.target.value)
  }

  return (
    <div>

    </div>
  )
}

export default SearchCombatant;
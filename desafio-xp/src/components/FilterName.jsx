import React, { useContext } from 'react';
import BalanceContext from '../context/BalanceContext';

const FilterName = () => {
  const { name, setName } = useContext(BalanceContext);

  return (
    <form>
      <input
        type="text"
        value={ name }
        onChange={ ({ target: { value } }) => setName(value) }
        placeholder="Busque uma ação"
      />
    </form>
  );
};

export default FilterName;

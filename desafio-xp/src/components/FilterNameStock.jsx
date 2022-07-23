import React, { useContext } from 'react';
import BalanceContext from '../context/BalanceContext';

const FilterNameStock = () => {
  const { FilterName, setFilterName } = useContext(BalanceContext);

  return (
    <form>
      <input
        type="text"
        value={ FilterName }
        onChange={ ({ target: { value } }) => setFilterName(value) }
        placeholder="Busque uma ação"
        className="text-center mb-4 text-black"
      />
    </form>
  );
};

export default FilterNameStock;

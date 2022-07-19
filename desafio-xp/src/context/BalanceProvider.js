import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BalanceContext from './BalanceContext';

function BalanceProvider({ children }) {
  const INITIAL_BALANCE = 900;
  const [balance, setBalance] = useState(INITIAL_BALANCE);

  const contextValue = {
    balance,
    setBalance,
  };

  return (
    <BalanceContext.Provider value={ contextValue }>
      {children}
    </BalanceContext.Provider>
  );
}

BalanceProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default BalanceProvider;

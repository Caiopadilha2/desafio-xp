import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BalanceContext from './BalanceContext';
import { myStocksData, StocksToByData, allStocksData } from '../data';

function BalanceProvider({ children }) {
  const INITIAL_BALANCE = '900';
  const [balance, setBalance] = useState(INITIAL_BALANCE);
  const [array, setArray] = useState({});
  const [myStocks, setMyStocks] = useState(myStocksData);
  const [stocksToBy, setStocksToBy] = useState(StocksToByData);
  const [allStocks, setAllStocks] = useState(allStocksData);

  const contextValue = {
    balance,
    setBalance,
    array,
    setArray,
    myStocks,
    setMyStocks,
    stocksToBy,
    setStocksToBy,
    allStocks,
    setAllStocks,
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

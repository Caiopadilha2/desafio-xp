import React from 'react';
import BalanceProvider from './context/BalanceProvider';
import Routes from './helpers/routes';

function App() {
  return (
    <BalanceProvider>
      <Routes />
    </BalanceProvider>
  );
}

export default App;

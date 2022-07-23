import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import WalletComponent from '../components/WalletComponent';

const Wallet = () => (
  <div className="bg-black min-h-screen items-center justify-center text-white">
    <HeaderComponent />
    <WalletComponent />
  </div>
);

export default Wallet;

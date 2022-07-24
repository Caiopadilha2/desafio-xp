import React from 'react';

const HeaderComponent = () => {
  const emailStorage = localStorage.getItem('userEmail');
  const REMOVE_FIRST_CHARACTER = 1;
  const REMOVE_LAST_CHARACTER = -1;
  const email = emailStorage.slice(REMOVE_FIRST_CHARACTER, REMOVE_LAST_CHARACTER);
  return (
    <div className="bg-stone-600 h-6 flex items-center justify-center mb-4 rounded-lg">
      <h3>{`Usuário: ${email}`}</h3>
    </div>
  );
};

export default HeaderComponent;

import React from 'react';

const HeaderComponent = () => {
  const emailStorage = localStorage.getItem('userEmail');
  const REMOVE_FIRST_CHARACTER = 1;
  const REMOVE_LAST_CHARACTER = -1;
  const email = emailStorage.slice(REMOVE_FIRST_CHARACTER, REMOVE_LAST_CHARACTER);
  return (
    <div>
      <h3>{`Usuário: ${email}`}</h3>
    </div>
  );
};

export default HeaderComponent;

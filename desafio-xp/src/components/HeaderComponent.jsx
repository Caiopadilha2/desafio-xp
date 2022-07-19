import React from 'react';

const HeaderComponent = () => {
  const email = localStorage.getItem('userEmail');
  // const email = emailStorage.substring();
  return (
    <div>
      <h3>{`Usuário: ${email}`}</h3>
    </div>
  );
};

export default HeaderComponent;

import React from 'react';

const HeaderComponent = () => {
  const email = localStorage.getItem('userEmail');
  return (
    <div>
      <h3>{ email }</h3>
    </div>
  );
};

export default HeaderComponent;

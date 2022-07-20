import React, { useContext } from 'react';
import BalanceContext from '../context/BalanceContext';

const NegociationComponent = () => {
  const { array, setArray } = useContext(BalanceContext);

  return (
    <div>
      <h3>Negociar</h3>
      <p>{array.map((acao, index) => <p key={ index }>{acao.name}</p>)}</p>
    </div>
  );
};

export default NegociationComponent;

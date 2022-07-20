import React, { useContext } from 'react';
import BalanceContext from '../context/BalanceContext';
import HeaderComponent from './HeaderComponent';

const NegociationComponent = () => {
  const { array, setArray } = useContext(BalanceContext);

  return (
    <div>
      <HeaderComponent />
      <h2>Comprar/Vender ação:</h2>
      <table>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Qtde.</th>
            <th>Valor (R$)</th>
            <th>Negociar</th>
          </tr>
        </thead>
      </table>
      <p>{array.map((acao, index) => <p key={ index }>{acao.name}</p>)}</p>
    </div>
  );
};

export default NegociationComponent;

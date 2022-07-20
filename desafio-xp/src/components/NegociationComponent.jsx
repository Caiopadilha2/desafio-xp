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
          </tr>
        </thead>
        <tbody>
          { array.map(({ id, name, amount, value }) => (
            <tr key={ id }>
              <td>{name}</td>
              <td>{amount}</td>
              <td>{`R$ ${value},00`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div id="buy">
        <button type="button">Comprar</button>
        <input type="number" min="0" placeholder="Informe o Valor" />
      </div>
      <div id="sale">
        <button type="button">Vender</button>
        <input type="number" min="0" placeholder="Informe o Valor" />
      </div>
      <button type="button">Voltar</button>
    </div>
  );
};
// todo: provavelmente terei que separar em 02 páginas, uma de venda e outra de compra.

export default NegociationComponent;

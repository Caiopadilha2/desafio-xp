import React from 'react';
import { useHistory } from 'react-router-dom';
import { myStocks, StocksToBy } from '../data';
import HeaderComponent from './HeaderComponent';

const NegociationComponent = () => {
  const history = useHistory();

  return (
    <div>
      <HeaderComponent />
      <h3>Minhas ações</h3>
      <table>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Qtde.</th>
            <th>Valor (R$)</th>
            <th>Negociar</th>
          </tr>
        </thead>

        <tbody>
          { myStocks.map(({ id, name, amount, value }) => (
            <tr key={ id } id={ id }>
              <td>{name}</td>
              <td>{amount}</td>
              <td>{`R$ ${value},00`}</td>
            </tr>
          ))}
        </tbody>

      </table>

      <h3>Disponíveis para investir</h3>
      <table>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Qtde.</th>
            <th>Valor (R$)</th>
            <th>Negociar</th>
          </tr>
        </thead>

        <tbody>
          { StocksToBy.map(({ id, name, amount, value }) => (
            <tr key={ id } id={ id }>
              <td>{name}</td>
              <td>{amount}</td>
              <td>{`R$ ${value},00`}</td>
            </tr>
          ))}
        </tbody>

      </table>
      <button
        type="button"
        onClick={ () => history.push('/balance') }
      >
        Depósito/Retirada

      </button>
    </div>
  );
};

export default NegociationComponent;

// refatorar pra ficar em uma função só.

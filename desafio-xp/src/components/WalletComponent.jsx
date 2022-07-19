import React from 'react';
import { useHistory } from 'react-router-dom';
import { myStocks, StocksToBy } from '../data';

const WalletComponent = () => {
  const history = useHistory();

  const redirectToNegociation = () => {
    history.push('/negociation');
  };

  return (
    <div>
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
              <button
                type="button"
                onClick={ () => redirectToNegociation() }
              >
                Buy
              </button>
              <button
                type="button"
                onClick={ () => redirectToNegociation() }
              >
                Sale
              </button>
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
              <button
                type="button"
                onClick={ () => redirectToNegociation() }
              >
                Buy
              </button>
              <button type="button" disabled>Sale</button>
            </tr>
          ))}
        </tbody>

      </table>
      <button
        type="button"
        onClick={ () => history.push('/balance') }
      >
        Depósito/Saque

      </button>
    </div>
  );
};

export default WalletComponent;

// refatorar pra ficar em uma função só.

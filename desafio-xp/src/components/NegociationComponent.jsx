import React from 'react';
import { myStocks, StocksToBy } from '../data';

const NegociationComponent = () => (
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
  </div>
);

export default NegociationComponent;

// refatorar pra ficar em uma função só.

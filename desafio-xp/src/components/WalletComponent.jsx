import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BalanceContext from '../context/BalanceContext';

const WalletComponent = () => {
  const history = useHistory();
  const {
    balance,
    myStocks,
    stocksToBy,
    allStocks,
    setArray,
  } = useContext(BalanceContext);
  const [hideBalance, setHideBalance] = useState(true);
  // console.log(allStocks);

  const selecionarAção = (IdAcaoClicada) => {
    const todasAsacoes = allStocks;
    const acao = todasAsacoes.filter((stock) => stock.id === IdAcaoClicada);
    setArray(acao);
    // console.log(acao);
    history.push('/negociation');
  };

  // console.log(myStocks);

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={ () => setHideBalance(!hideBalance) }
        >
          { hideBalance ? 'Esconder saldo' : 'Mostrar saldo'}
        </button>
        {hideBalance && <h3>{`Saldo em conta: R$${Number(balance)},00`}</h3>}
      </div>
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
            <tr key={ id }>
              <td>{name}</td>
              <td>{amount}</td>
              <td>{`R$ ${value},00`}</td>
              <button
                type="button"
                onClick={ () => selecionarAção(id) }
              >
                Buy
              </button>
              <button
                type="button"
                onClick={ () => selecionarAção(id) }
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
          { stocksToBy.map(({ id, name, amount, value }) => (
            <tr key={ id } id={ id }>
              <td>{name}</td>
              <td>{amount}</td>
              <td>{`R$ ${value},00`}</td>
              <button
                type="button"
                onClick={ () => selecionarAção(id) }
              >
                Buy
              </button>
              <button type="button" disabled>Sale</button>
              {/* Todas as ações do array de "ações para comprar" vêm com botão de venda desabilitado. */}
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

// todo: refatorar pra ficar em uma função só.

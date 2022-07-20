import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BalanceContext from '../context/BalanceContext';
import HeaderComponent from './HeaderComponent';
import onlynumber from '../helpers/onlyNumberInput';

const NegociationComponent = () => {
  const {
    array,
    balance,
    setBalance,
    stocksToBy,
    myStocks,
    setMyStocks,
  } = useContext(BalanceContext);
  const [offerBuy, setOfferBy] = useState('');
  const [offerSale, setOfferSale] = useState('');
  const history = useHistory();

  // const removeFromToBy = (idAcao) => {
  //   const todasAcoes = stocksToBy;
  //   const acoesResultantes = todasAcoes.filter((acao) => acao.id !== idAcao);
  //   setStocksToBy(acoesResultantes);
  //   console.log(acoesResultantes);
  // };

  const buy = () => {
    if (offerBuy > balance) {
      global.alert('Você não possui saldo suficiente para esta oferta de compra.');
      setOfferBy('');
      return setBalance(Number(balance));
    }
    if (stocksToBy) {
      setMyStocks([...myStocks, array[0]]);
      // const todasAcoes = stocksToBy;
      // const acoesResultantes = todasAcoes.filter((acao) => acao.id !== stocksToBy.id);
      // setStocksToBy(acoesResultantes);
      // console.log(acoesResultantes);
    }
    global.alert('Sua requisição de compra foi enviada!');
    setBalance(Number(balance) - Number(offerBuy));
    setOfferBy('');
    history.push('/wallet');
  };

  const sale = () => {
    setBalance(Number(balance) + Number(offerSale));
    setOfferSale('');
    global.alert('Sua requisição de venda foi enviada!');
  };

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
        <button
          type="button"
          onClick={ () => buy() }
        >
          Comprar
        </button>
        <input
          type="number"
          min="0"
          onKeyPress={ onlynumber }
          placeholder="Informe o Valor"
          onChange={ ({ target }) => setOfferBy(target.value) }
          value={ offerBuy }
        />
      </div>
      <div id="sale">
        <button
          type="button"
          onClick={ () => sale() }
        >
          Vender
        </button>
        <input
          type="number"
          min="0"
          onKeyPress={ onlynumber }
          placeholder="Informe o Valor"
          onChange={ ({ target }) => setOfferSale(target.value) }
          value={ offerSale }
        />
      </div>
      <button
        type="button"
        onClick={ () => history.push('/wallet') }
      >
        Voltar

      </button>
    </div>
  );
};
// todo: provavelmente terei que separar em 02 páginas, uma de venda e outra de compra.

export default NegociationComponent;

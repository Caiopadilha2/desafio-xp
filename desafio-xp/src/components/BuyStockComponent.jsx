import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import BalanceContext from '../context/BalanceContext';
import onlynumber from '../helpers/onlyNumberInput';

const MySwal = withReactContent(Swal);

const BuyStockComponent = () => {
  const {
    array,
    balance,
    setBalance,
    myStocks,
    setMyStocks,
  } = useContext(BalanceContext);
  const [offerBuy, setOfferBy] = useState('');
  const history = useHistory();

  const buy = () => {
    if (Number(offerBuy) > Number(balance)) {
      MySwal.fire(
        'Oops... :(',
        'Você não possui saldo suficiente para esta requisição de compra.',
        'error',
      );
      // global.alert('Você não possui saldo suficiente para esta oferta de compra.');
      setOfferBy('');
      return setBalance(Number(balance));
    }
    setMyStocks([...myStocks, array[0]]);
    MySwal.fire(
      'Good job!',
      'Sua requisição de venda foi enviada!',
      'success',
    );
    // global.alert('Sua requisição de compra foi enviada!');
    setBalance(Number(balance) - Number(offerBuy));
    setOfferBy('');
    history.push('/wallet');
  };

  return (
    <div>
      <h2>Comprar ação:</h2>
      <table>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Qtde.</th>
            <th>Valor (R$)</th>
          </tr>
        </thead>
        <tbody>
          { array && array.map(({ id, name, amount, value }) => (
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
          onChange={ ({ target: { value } }) => setOfferBy(value) }
          value={ offerBuy }
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

export default BuyStockComponent;

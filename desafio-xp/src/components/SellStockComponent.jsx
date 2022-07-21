import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import BalanceContext from '../context/BalanceContext';
import onlynumber from '../helpers/onlyNumberInput';

const MySwal = withReactContent(Swal);

const SellStockComponent = () => {
  const {
    array,
    balance,
    setBalance,
  } = useContext(BalanceContext);
  const [offerSale, setOfferSale] = useState('');
  const history = useHistory();

  const sale = () => {
    setBalance(Number(balance) + Number(offerSale));
    setOfferSale('');
    MySwal.fire(
      'Good job!',
      'Sua requisição de venda foi enviada!',
      'success',
    );
    // global.alert('Sua requisição de venda foi enviada!');
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
          onChange={ ({ target: { value } }) => setOfferSale(value) }
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

export default SellStockComponent;

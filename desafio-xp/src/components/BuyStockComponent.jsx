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
        `Você não possui saldo para esta requisição de compra. \n
         Seu saldo é de R$:${balance},00`,
        'error',
      );
      // global.alert('Você não possui saldo suficiente para esta oferta de compra.');
      setOfferBy('');
      return setBalance(Number(balance));
    }
    setMyStocks([...myStocks, array[0]]);
    MySwal.fire(
      'Muito bem!',
      `Sua requisição de compra no valor de R$:${offerBuy},00 foi enviada! 📈`,
      'success',
    );
    // global.alert('Sua requisição de compra foi enviada!');
    setBalance(Number(balance) - Number(offerBuy));
    setOfferBy('');
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white">
      <section className="bg-zinc-800 border-2 rounded-2xl max-w-lg py-16 px-12">
        <h1 className="mb-3 text-lg">Comprar ação:</h1>
        <table>
          <tr className="bg-zinc-600">
            <th>Ação</th>
            <th>Qtde.</th>
            <th>Valor (R$)</th>
          </tr>
          <tbody>
            { array && array.map(({ id, name, amount, value }) => (
              <tr key={ id }>
                <td className="bg-yellow-300 text-black text-center">{name}</td>
                <td className="bg-stone-600 text-center">{amount}</td>
                <td className="bg-black text-center">{`R$ ${value},00`}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="button"
          onClick={ () => buy() }
          className="bg-yellow-400 p-2 mt-8 mr-6 rounded-md text-black font-medium"
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
          className="inline-block text-center rounded text-lg text-zinc-800 mb-1 h-10"
        />
        <div>
          <button
            type="button"
            onClick={ () => history.push('/wallet') }
            className="bg-yellow-400 p-2 mt-8 rounded-md text-black text-l font-medium"
          >
            Voltar

          </button>
        </div>
      </section>
    </div>
  );
};

export default BuyStockComponent;

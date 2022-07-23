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
      'Muito bem!',
      `Sua requisição de venda no valor de R$${offerSale},00 foi enviada! 📈`,
      'success',
    );
    // global.alert('Sua requisição de venda foi enviada!');
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white">
      <section className="bg-zinc-800 border-2 rounded-2xl max-w-lg py-16 px-12">
        <h2 className="mb-3 text-lg">Vender ação:</h2>
        <table>
          <tr>
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
          onClick={ () => sale() }
          className="bg-yellow-400 p-2 mt-8 mr-6 rounded-md text-black font-medium"
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

// todo: dava para componentizar esse junto com o de comprar ações.

export default SellStockComponent;

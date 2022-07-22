import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import BalanceContext from '../context/BalanceContext';
import onlynumber from '../helpers/onlyNumberInput';
// import HeaderComponent from './HeaderComponent';

const MySwal = withReactContent(Swal);

const BalanceComponent = () => {
  const history = useHistory();
  const { balance, setBalance } = useContext(BalanceContext);
  // const [money, setMoney] = useState(balance);
  const [deposito, setDeposito] = useState('');
  const [hideBalance, setHideBalance] = useState(true);
  // console.log(balance);
  // console.log(deposito);

  const depositar = () => {
    setBalance(Number(balance) + Number(deposito));
    setDeposito('');
    MySwal.fire(
      'Muito bem!',
      'Dinheiro depositado na sua conta! 💵',
      'success',
    );
  };

  const sacar = () => {
    if (Number(deposito) > Number(balance)) {
      MySwal.fire(
        'Oops... :(',
        'Você não possui saldo suficiente para este saque.',
        'error',
      );
      setDeposito('');
      return setBalance(Number(balance));
    }
    MySwal.fire(
      'Muito bem!',
      'Você resgatou seu dinheiro com sucesso! 💵',
      'success',
    );
    setBalance(Number(balance) - Number(deposito));
    setDeposito('');
  };

  return (

    <div className="bg-black min-h-screen flex items-center justify-center text-white">
      <section className="bg-zinc-800 max-w-lg py-20 px-16">
        <div>
          <button
            type="button"
            onClick={ () => setHideBalance(!hideBalance) }
          >
            { hideBalance ? 'E s' : 'Mo s'}
          </button>
          {hideBalance && <h3>{`Saldo em conta: R$${Number(balance)},00`}</h3>}
        </div>

        <input
          placeholder="Informe o valor"
          type="number"
          onKeyPress={ onlynumber }
          min="0"
          onChange={ ({ target: { value } }) => setDeposito(value) }
          value={ deposito }
          className="block w-full rounded text-lg text-zinc-800 p-1 mb-1"
        />
        <button
          type="button"
          onClick={ () => depositar() }
          className="bg-yellow-400 inline-block p-2 mt-8 mr-6 w-28 rounded-md text-black"
        >
          Depositar

        </button>
        <button
          type="button"
          onClick={ () => sacar() }
          className="bg-yellow-400 inline-block p-2 ml-8 w-28 mt-4 rounded-md text-black"
        >
          Sacar

        </button>
        <div>
          <button
            type="button"
            onClick={ () => history.push('/wallet') }
            className="bg-yellow-400 p-2 w-full mt-16 rounded-md text-black text-xl"
          >
            Voltar

          </button>
        </div>
      </section>
    </div>
  );
};

export default BalanceComponent;

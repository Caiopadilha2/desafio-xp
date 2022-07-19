import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BalanceContext from '../context/BalanceContext';
import HeaderComponent from './HeaderComponent';

const BalanceComponent = () => {
  const history = useHistory();
  const { balance, setBalance } = useContext(BalanceContext);
  // const [money, setMoney] = useState(balance);
  const [deposito, setDeposito] = useState('');
  // console.log(balance);
  // console.log(deposito);

  const Deposito = () => {
    setBalance(Number(balance) + Number(deposito));
    setDeposito('');
  };

  const Saque = () => {
    setBalance(Number(balance) - Number(deposito));
    setDeposito('');
  };

  return (
    <div>
      <HeaderComponent />
      <section>
        <p>{`Saldo em conta: R$${Number(balance)}`}</p>

        <input
          placeholder="Informe o valor"
          type="number"
          min="0"
          onChange={ ({ target }) => setDeposito(target.value) }
          value={ deposito }
        />
        <button
          type="button"
          onClick={ () => Deposito() }
        >
          Depositar

        </button>
        <button
          type="button"
          onClick={ () => Saque() }
        >
          Sacar

        </button>
        <div>
          <button
            type="button"
            onClick={ () => history.push('/wallet') }
          >
            Voltar

          </button>
        </div>
      </section>

    </div>
  );
};

export default BalanceComponent;

import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BalanceContext from '../context/BalanceContext';
// import HeaderComponent from './HeaderComponent';

const BalanceComponent = () => {
  const history = useHistory();
  const { balance, setBalance } = useContext(BalanceContext);
  // const [money, setMoney] = useState(balance);
  const [deposito, setDeposito] = useState('');
  const [hide, setHide] = useState(true);
  // console.log(balance);
  // console.log(deposito);

  const depositar = () => {
    setBalance(Number(balance) + Number(deposito));
    setDeposito('');
  };

  const sacar = () => {
    if (deposito > balance) {
      global.alert('Você não possui saldo suficiente para este saque.');
      setDeposito('');
      return setBalance(Number(balance));
    }
    setBalance(Number(balance) - Number(deposito));
    setDeposito('');
  };

  return (
    <div>

      <section>
        <div>
          <button
            type="button"
            onClick={ () => setHide(!hide) }
          >
            { hide ? 'Esconder saldo' : 'Mostrar saldo'}
          </button>
          {hide && <h3>{`Saldo em conta: R$${Number(balance)}`}</h3>}
        </div>

        <input
          placeholder="Informe o valor"
          type="number"
          min="0"
          onChange={ ({ target }) => setDeposito(target.value) }
          value={ deposito }
        />
        <button
          type="button"
          onClick={ () => depositar() }
        >
          Depositar

        </button>
        <button
          type="button"
          onClick={ () => sacar() }
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

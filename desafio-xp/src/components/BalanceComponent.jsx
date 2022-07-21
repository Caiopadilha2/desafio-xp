import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BalanceContext from '../context/BalanceContext';
import onlynumber from '../helpers/onlyNumberInput';
// import HeaderComponent from './HeaderComponent';

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
  };

  const sacar = () => {
    if (Number(deposito) > Number(balance)) {
      global.alert('Você não possui saldo suficiente para este saque.');
      setDeposito('');
      return setBalance(Number(balance));
    }
    setBalance(Number(balance) - Number(deposito));
    setDeposito('');
  };

  return (

    <section>
      <div>
        <button
          type="button"
          onClick={ () => setHideBalance(!hideBalance) }
        >
          { hideBalance ? 'Esconder saldo' : 'Mostrar saldo'}
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
  );
};

export default BalanceComponent;

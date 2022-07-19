import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import BalanceContext from '../context/BalanceContext';
import HeaderComponent from './HeaderComponent';

const BalanceComponent = () => {
  const history = useHistory();
  const { balance } = useContext(BalanceContext);
  console.log(balance);

  const confirme = () => {
    // todo: alguma lógica para somar ou reduzir saldo.
    history.push('/wallet');
  };

  return (
    <div>
      <HeaderComponent />
      <section>
        <p>{`Saldo em conta: R$${balance},00`}</p>
        <button
          type="button"
          // onClick={  }
        >
          Depositar

        </button>
        <button
          type="button"
          // onClick={ }
        >
          Sacar

        </button>
        <div>
          <input
            placeholder="Informe o valor"
            type="number"
            min="0"
            // value={ }
          />
        </div>
        <button
          type="button"
          onClick={ () => history.push('/wallet') }
        >
          Voltar

        </button>
        <button
          type="button"
          onClick={ () => confirme() }
        >
          Confirmar

        </button>
      </section>

    </div>
  );
};

export default BalanceComponent;

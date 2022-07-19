import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

const BalanceComponent = () => {
  const history = useHistory();

  const confirme = () => {
    // todo: alguma lógica para somar ou reduzir saldo.
    history.push('/wallet');
  };

  return (
    <div>
      <HeaderComponent />
      <section>
        <p>Saldo em conta: R$500,00</p>
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

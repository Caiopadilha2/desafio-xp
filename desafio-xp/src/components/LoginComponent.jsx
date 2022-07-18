import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import saveEmailLocalStorage from '../helpers/LocalStorage';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleDisableButton = () => {
    const MIN_CHARACTERS = 6;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const validEmail = emailRegex.test(email);

    if (password.length > MIN_CHARACTERS && validEmail) {
      return false;
    }
    return true;
  };
  // refatorar.

  const onSubmitLogin = () => {
    // salvar no localstorage e mudar de rota
    saveEmailLocalStorage(email);
    history.push('/wallet');
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email:"
        onChange={ ({ target }) => setEmail(target.value) }
        value={ email }
      />
      <input
        type="password"
        placeholder="Password"
        onChange={ ({ target }) => setPassword(target.value) }
        value={ password }
      />
      <button
        type="button"
        disabled={ handleDisableButton() }
        onClick={ () => onSubmitLogin() }
      >
        Acessar

      </button>
    </div>
  );
};

export default LoginComponent;

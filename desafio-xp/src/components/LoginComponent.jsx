import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saveEmailLocalStorage, saveDateLocalStorage } from '../helpers/LocalStorage';
import logo from '../assets/logo.png';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleDisableButton = () => {
    const MIN_CHARACTERS = 6;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const validEmail = emailRegex.test(email);
    return !(password.length > MIN_CHARACTERS && validEmail);
  };

  const onSubmitLogin = () => {
    saveEmailLocalStorage(email);
    saveDateLocalStorage();
    history.push('/wallet');
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white">
      <section className="bg-zinc-800 max-w-lg rounded-2xl py-14 px-16">
        <div className="bg-white rounded-full w-36 h-20 mx-auto mb-20">
          <img src={ logo } alt="logo-xp" className="w-54" />
        </div>
        <form>
          <label htmlFor="email" className="font-medium">
            Email
            <input
              type="email"
              onChange={ ({ target: { value } }) => setEmail(value) }
              value={ email }
              id="email"
              placeholder="usario@email.com"
              className="block w-full rounded text-lg text-zinc-800 p-1 mb-2 text-center"
            />
          </label>
          <label htmlFor="password" className="font-medium">
            Password
            <input
              type="password"
              onChange={ ({ target: { value } }) => setPassword(value) }
              value={ password }
              id="password"
              placeholder="******"
              className="block w-full rounded text-lg text-zinc-800 p-1 mb-2 text-center"
            />
          </label>
          <a
            href="https://cadastro.xpi.com.br/desktop/step/1"
            className="underline flex justify-end"
            target="_blank"
            rel="noreferrer"
          >
            Abra sua conta
          </a>
          <button
            type="submit"
            disabled={ handleDisableButton() }
            onClick={ () => onSubmitLogin() }
            className="bg-yellow-400 p-2 w-full mt-8 rounded-md text-black text-lg"
          >
            Acessar
          </button>
        </form>
      </section>
    </div>
  );
};

export default LoginComponent;

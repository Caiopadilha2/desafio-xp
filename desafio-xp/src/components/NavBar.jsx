import React from 'react';
import { useHistory } from 'react-router-dom';
import { clearUserLocalStorage } from '../helpers/LocalStorage';

const NavBar = () => {
  const history = useHistory();

  const logout = () => {
    clearUserLocalStorage();
    history.push('/');
  };
  return (
    <nav className="flex justify-around underline bg-sky-600 font-black border-2">
      <a
        href="https://blog.xpeducacao.com.br/categoria/como-investir/?gclid=Cj0KCQjwuO6WBhDLARIsAIdeyDL_7R5dGtBXIW7jfJXfwhnMybj19couN9DRLo5lPC2kekEQML1pPwoaAtPwEALw_wcB"
        target="_blank"
        rel="noreferrer"
      >
        Aprenda a investir!
      </a>
      <a
        href="https://www.gov.br/cvm/pt-br/canais_atendimento/consultas-reclamacoes-denuncias"
        target="_blank"
        rel="noreferrer"
      >
        Fale com a CVM
      </a>
      <a
        href="/"
        onClick={ () => logout() }
      >
        Logout
      </a>
    </nav>
  );
};

export default NavBar;

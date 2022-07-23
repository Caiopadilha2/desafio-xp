import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BalanceContext from '../context/BalanceContext';
import FilterNameStock from './FilterNameStock';
import olhoAberto from '../assets/olho_aberto.jpeg';
import olhoFechado from '../assets/olho_fechado.jpeg';
import HeaderComponent from './HeaderComponent';

const WalletComponent = () => {
  const history = useHistory();
  const {
    balance,
    myStocks,
    stocksToBy,
    allStocks,
    setArray,
    filterName,
  } = useContext(BalanceContext);
  const [hideBalance, setHideBalance] = useState(true);
  const [eyeOpen, setEyeOpen] = useState(true);

  const selecionarAçãoCompra = (IdAcaoClicada) => {
    const todasAsacoes = allStocks;
    const acao = todasAsacoes.filter((stock) => stock.id === IdAcaoClicada);
    setArray(acao);
    history.push('/buystock');
  };

  const selecionarAçãoVenda = (IdAcaoClicada) => {
    const todasAsacoes = allStocks;
    const acao = todasAsacoes.filter((stock) => stock.id === IdAcaoClicada);
    setArray(acao);
    history.push('/sellstock');
  };

  const filteredStocks = () => stocksToBy.filter(({ name }) => name.toLowerCase()
    .includes(filterName.toLowerCase()));

  const handleHide = () => {
    setHideBalance(!hideBalance);
    setEyeOpen(!eyeOpen);
  };

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className="bg-zinc-800 border-2 rounded-2xl max-w-lg py-16 px-12">
      <div>
        <HeaderComponent />
        <nav className="flex justify-around underline bg-blue-500 font-black border-2">
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
        <button
          type="button"
          onClick={ () => handleHide() }
        >
          <img
            src={ eyeOpen ? olhoAberto : olhoFechado }
            alt="esconder saldo"
            className="w-10 mt-3"
          />
        </button>
        <p className="my-1 text-lg ">
          Saldo em conta:
          {' '}
          {hideBalance
            ? <p className="my-1 text-lg inline-block">{`R$${Number(balance)},00`}</p>
            : <h3>R$ --,--</h3>}

        </p>

      </div>
      <h3 className="my-3 text-lg">Minhas ações</h3>
      <table>
        <thead>
          <tr className="bg-zinc-600">
            <th>Ação</th>
            <th>Qtde.</th>
            <th>Valor (R$)</th>
            <th>Negociar</th>
          </tr>
        </thead>

        <tbody>
          { myStocks && myStocks.map(({ id, name, amount, value }) => (
            <tr key={ id }>
              <td className="bg-yellow-300 text-black text-center w-16 ">{name}</td>
              <td className="bg-stone-600 text-center">{amount}</td>
              <td className="bg-black text-center">{`R$ ${value},00`}</td>
              <button
                type="button"
                onClick={ () => selecionarAçãoCompra(id) }
                className="bg-blue-700 w-10"
              >
                Buy
              </button>
              <button
                type="button"
                onClick={ () => selecionarAçãoVenda(id) }
                className="bg-green-700 w-10"
              >
                Sale
              </button>
            </tr>
          ))}
        </tbody>

      </table>

      <h3 className="my-5 text-lg">Disponíveis para investir</h3>
      <FilterNameStock />
      <table>
        <thead>
          <tr className="bg-zinc-600">
            <th>Ação</th>
            <th>Qtde.</th>
            <th>Valor (R$)</th>
            <th>Negociar</th>
          </tr>
        </thead>

        <tbody>
          { stocksToBy && filteredStocks().map(({ id, name, amount, value }) => (
            <tr key={ id } id={ id }>
              <td className="bg-yellow-300 text-black text-center w-16">{name}</td>
              <td className="bg-stone-600 text-center">{amount}</td>
              <td className="bg-black text-center">{`R$ ${value},00`}</td>
              <button
                type="button"
                onClick={ () => selecionarAçãoCompra(id) }
                className="bg-blue-700 w-10"
              >
                Buy
              </button>
              <button
                type="button"
                disabled
                className="bg-zinc-400 w-10"
              >
                Sale
              </button>
              {/* Todas as ações do array de "ações para comprar" vêm com botão de venda desabilitado. */}
            </tr>
          ))}
        </tbody>

      </table>
      <button
        type="button"
        onClick={ () => history.push('/balance') }
        className="bg-yellow-400 p-2 mt-8 rounded-md text-black text-l font-medium"
      >
        Depósito / Saque

      </button>
    </div>
  );
};

export default WalletComponent;

// todo: refatorar pra ficar em uma função só.

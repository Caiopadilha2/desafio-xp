import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Wallet from '../components/WalletComponent';

test('Link para aprender a investir está na tela.', () => {
  renderWithRouter(<Wallet />);
  const link = screen.getByRole('link', { name: 'Aprenda a investir!' });
  expect(link).toBeInTheDocument();
});

test('Link para CVM está na tela.', () => {
  renderWithRouter(<Wallet />);
  const link = screen.getByRole('link', { name: 'Fale com a CVM' });
  expect(link).toBeInTheDocument();
});

test('Título de minhas ações aparece na tela.', () => {
  renderWithRouter(<Wallet />);
  const heading = screen.getByRole('heading', { name: 'Minhas ações', level: 3 });
  expect(heading).toBeInTheDocument();
});

test('Título de ações disponíveis aparece na tela.', () => {
  renderWithRouter(<Wallet />);
  const heading = screen.getByRole('heading', { name: /Disponíveis/i, level: 3 });
  expect(heading).toBeInTheDocument();
});

test('Input de filtro aparece na tela.', () => {
  renderWithRouter(<Wallet />);
  const input = screen.getByPlaceholderText('Busque uma ação');
  expect(input).toBeInTheDocument();
});

test('Botão para depósito/saque aparece na tela.', () => {
  renderWithRouter(<Wallet />);
  const button = screen.getByRole('button', { name: /depósito/i });
  expect(button).toBeInTheDocument();
  expect(button).not.toBeDisabled();
});

test('Botões para comprar aparecem na tela e estão habilitados.', () => {
  renderWithRouter(<Wallet />);
  const button = screen.getAllByRole('button', { name: /comprar/i });
  expect(button).toBeInTheDocument();
  expect(button).not.toBeDisabled();
});

import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Balance from '../components/BalanceComponent';

test('Texto "Saldo em conta" aparece na tela.', () => {
  renderWithRouter(<Balance />);
  const text = screen.getByRole('heading', { name: /Saldo/i });
  expect(text).toBeInTheDocument();
});

test('Input de valor aparece na tela.', () => {
  renderWithRouter(<Balance />);
  const input = screen.getByPlaceholderText('Informe o valor');
  expect(input).toBeInTheDocument();
});

test('O botão de depósito aparece na tela.', () => {
  renderWithRouter(<Balance />);
  const button = screen.getByRole('button', { name: /Depositar/i });
  expect(button).toBeInTheDocument();
});

test('O botão de sacar aparece na tela.', () => {
  renderWithRouter(<Balance />);
  const button = screen.getByRole('button', { name: /Sacar/i });
  expect(button).toBeInTheDocument();
});

test('O botão de voltar aparece na tela.', () => {
  renderWithRouter(<Balance />);
  const button = screen.getByRole('button', { name: /Voltar/i });
  expect(button).toBeInTheDocument();
});

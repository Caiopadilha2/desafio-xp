import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Login from '../components/LoginComponent';

test('Input de email está na tela.', () => {
  renderWithRouter(<Login />);
  const input = screen.getByPlaceholderText('Email:');
  expect(input).toBeInTheDocument();
});

test('Input de senha está na tela.', () => {
  renderWithRouter(<Login />);
  const input = screen.getByPlaceholderText('Password');
  expect(input).toBeInTheDocument();
});

test('Botão está na tela.', () => {
  renderWithRouter(<Login />);
  const button = screen.getByRole('button', { name: 'Acessar' });
  expect(button).toBeInTheDocument();
});

// test('Botão de acessar redireciona para página Wallet.', () => {
//   renderWithRouter(<Login />);
//   const button = screen.getByRole('button', { name: 'Acessar' });
//   userEvent.click(button);
//   const title = screen.getByRole('heading', { name: 'Minhas ações', level: 3 });
//   expect(title).toBeInTheDocument();
// });
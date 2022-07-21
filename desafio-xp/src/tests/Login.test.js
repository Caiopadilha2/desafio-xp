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
  expect(button).toBeDisabled();
});

// test('Botão de acessar redireciona para página Wallet.', () => {
//   renderWithRouter(<Login />);
//   const button = screen.getByRole('button', { name: 'Acessar' });
//   expect(button).toBeInTheDocument();
//   const inputEmail = screen.getByPlaceholderText('Email:');
//   expect(inputEmail).toBeInTheDocument();
//   const inputPassword = screen.getByPlaceholderText('Password');
//   expect(inputPassword).toBeInTheDocument();
//   userEvent.type(inputEmail, 'caiopadilha@teste.com');
//   userEvent.type(inputPassword, '123456');
//   userEvent.click(button);
//   const heading = screen.getByText(/minhas ações/);
//   expect(heading).toBeInTheDocument();
// });

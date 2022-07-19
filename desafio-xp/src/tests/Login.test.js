import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Login from '../components/LoginComponent';

test('Input de email está na tela.', () => {
  renderWithRouter(<Login />);
  const input = screen.getByPlaceholderText('Email:');
  expect(input).toBeInTheDocument();
});

test('Botão está na tela.', () => {
  renderWithRouter(<Login />);
  const button = screen.getByRole('button', { name: 'Acessar' });
  expect(button).toBeInTheDocument();
});

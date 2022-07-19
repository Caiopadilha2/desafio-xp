import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Login from '../components/LoginComponent';

test('Botão está na tela.', () => {
  renderWithRouter(<Login />);
  const button = screen.getByRole('button', { name: 'Acessar' });
  expect(button).toBeInTheDocument();
});

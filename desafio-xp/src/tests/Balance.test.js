import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Balance from '../components/BalanceComponent';

test('Título de minhas ações aparece na tela.', () => {
  renderWithRouter(<Balance />);
  const text = screen.getByText('Saldo em conta:');
  expect(text).toBeInTheDocument();
});

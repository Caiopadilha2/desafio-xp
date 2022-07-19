import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Wallet from '../components/WalletComponent';

test('Título de minhas ações aparece na tela.', () => {
  renderWithRouter(<Wallet />);
  const heading = screen.getByRole('heading', { name: 'Minhas ações', level: 3 });
  expect(heading).toBeInTheDocument();
});

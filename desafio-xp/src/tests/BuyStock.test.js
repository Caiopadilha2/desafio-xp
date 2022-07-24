import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import BuyStock from '../components/BuyStockComponent';

test('Texto "Comprar ação" aparece na tela.', () => {
  renderWithRouter(<BuyStock />);
  const text = screen.getByRole('heading', { name: /Comprar ação/i });
  expect(text).toBeInTheDocument();
});

test('O botão de comprar aparece na tela.', () => {
  renderWithRouter(<BuyStock />);
  const button = screen.getByRole('button', { name: /Comprar/i });
  expect(button).toBeInTheDocument();
  expect(button).not.toBeDisabled();
});

test('Input de valor aparece na tela.', () => {
  renderWithRouter(<BuyStock />);
  const input = screen.getByPlaceholderText('Informe o Valor');
  expect(input).toBeInTheDocument();
});

test('O botão de voltar aparece na tela.', () => {
  renderWithRouter(<BuyStock />);
  const button = screen.getByRole('button', { name: /Voltar/i });
  expect(button).toBeInTheDocument();
  expect(button).not.toBeDisabled();
});

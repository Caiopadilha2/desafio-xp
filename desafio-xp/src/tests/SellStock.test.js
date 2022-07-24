import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import SellStock from '../components/SellStockComponent';

test('Texto "Comprar ação" aparece na tela.', () => {
  renderWithRouter(<SellStock />);
  const text = screen.getByRole('heading', { name: /Vender ação/i });
  expect(text).toBeInTheDocument();
});

test('O botão de vender aparece na tela.', () => {
  renderWithRouter(<SellStock />);
  const button = screen.getByRole('button', { name: /Vender/i });
  expect(button).toBeInTheDocument();
  expect(button).not.toBeDisabled();
});

test('Input de valor aparece na tela.', () => {
  renderWithRouter(<SellStock />);
  const input = screen.getByPlaceholderText('Informe o Valor');
  expect(input).toBeInTheDocument();
});

test('O botão de voltar aparece na tela.', () => {
  renderWithRouter(<SellStock />);
  const button = screen.getByRole('button', { name: /Voltar/i });
  expect(button).toBeInTheDocument();
  expect(button).not.toBeDisabled();
});

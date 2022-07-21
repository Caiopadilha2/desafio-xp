import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Negociation from '../components/NegociationComponent';

test('Título de minhas ações aparece na tela.', () => {
  renderWithRouter(<Negociation />);
  const heading = screen.getByRole('heading', { name: /Comprar/i, level: 2 });
  expect(heading).toBeInTheDocument();
});

test('Botão para comprar uma ação aparece na tela.', () => {
  renderWithRouter(<Negociation />);
  const buttonBuy = screen.getByRole('button', { name: /Comprar/i });
  expect(buttonBuy).toBeInTheDocument();
  expect(buttonBuy).not.toBeDisabled();
});

test('Botão para vender uma ação aparece na tela.', () => {
  renderWithRouter(<Negociation />);
  const buttonSale = screen.getByRole('button', { name: /Vender/i });
  expect(buttonSale).toBeInTheDocument();
  expect(buttonSale).not.toBeDisabled();
});

test('Botão para vender uma ação aparece na tela.', () => {
  renderWithRouter(<Negociation />);
  const buttonBack = screen.getByRole('button', { name: /Voltar/i });
  expect(buttonBack).toBeInTheDocument();
  expect(buttonBack).not.toBeDisabled();
});

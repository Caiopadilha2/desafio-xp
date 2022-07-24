import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Login from '../components/LoginComponent';

test('A logo está na tela.', () => {
  renderWithRouter(<Login />);
  const img = screen.getByRole('img', { name: 'logo-xp' });
  expect(img).toBeInTheDocument();
});

test('Input de email está na tela.', () => {
  renderWithRouter(<Login />);
  const input = screen.getByPlaceholderText('usario@email.com');
  expect(input).toBeInTheDocument();
});

test('Input de senha está na tela.', () => {
  renderWithRouter(<Login />);
  const input = screen.getByPlaceholderText('******');
  expect(input).toBeInTheDocument();
});

test('Link para abrir sua conta está na tela.', () => {
  renderWithRouter(<Login />);
  const link = screen.getByRole('link', { name: 'Abra sua conta' });
  expect(link).toBeInTheDocument();
});

test('Botão está na tela.', () => {
  renderWithRouter(<Login />);
  const button = screen.getByRole('button', { name: 'Acessar' });
  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();
});

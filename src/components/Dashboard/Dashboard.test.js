import { render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';

test('Patikriname ar komponentas atvaizduoja h1 teksta', () => {
  render(<Dashboard />);
  const text = screen.getByText('Welcome to the Dashboard');
  expect(text).toBeInTheDocument();
});

test('Patikriname ar komponentas atvaizduoja h1 teksta', () => {
  render(<Dashboard />);
  const text = screen.getByTestId('h1');
  expect(text).toBeInTheDocument();
});

test('Patikriname ar komponentas atvaizduoja mygtuka', () => {
  render(<Dashboard />);
  const button = screen.getByText('Click me!');
  expect(button).toBeInTheDocument();
});

test('Patikriname ar komponentas atvaizduoja input elementa', () => {
  render(<Dashboard />);
  const input = screen.getByPlaceholderText('Enter your email');
  expect(input).toBeInTheDocument();
});

// Testas
// 1. Patikriname ar komponentas atvaizduoja h1 teksta
// 2. Patikriname ar komponentas atvaizduoja mygtuka
// 3. Patikriname ar komponentas atvaizduoja input elementa

// Reikia panaudoti .toBeInTheDocument() metoda

import { fireEvent, render, screen } from '@testing-library/react';
import { Login } from './Login';

// 1. Testuojame ar forma turi email ir password inputus ir mygtuka
test('Testuojame ar forma turi email ir password inputus ir mygtuka ', () => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText('email');
  const passwordlInput = screen.getByPlaceholderText('password');
  const button = screen.getByText('Login');

  expect(emailInput).toBeInTheDocument();
  expect(passwordlInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('Testuojame ar suvedus teisingus duomenis, bus atvaizduojama Prisijungete sekmingai!', () => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText('email');
  const passwordlInput = screen.getByPlaceholderText('password');
  const button = screen.getByText('Login');

  fireEvent.change(emailInput, { target: { value: 'user@gmail.com' } });
  fireEvent.change(passwordlInput, { target: { value: '1234' } });
  fireEvent.click(button);

  expect(screen.getByText('Prisijungete sekmingai')).toBeInTheDocument();
});

test('Testuojame ar suvedus neteisingus duomenis, bus atvaizduojama Prisijungete sekmingai!', () => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText('email');
  const passwordlInput = screen.getByPlaceholderText('password');
  const button = screen.getByText('Login');

  fireEvent.change(emailInput, { target: { value: '123123' } });
  fireEvent.change(passwordlInput, { target: { value: 'asadasad' } });
  fireEvent.click(button);

  expect(screen.getByText('Neteisingi duomenys')).toBeInTheDocument();
});

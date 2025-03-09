import { fireEvent, render, screen } from '@testing-library/react';
import { Login } from './Login';

// 1. Testuojame, ar forma turi email ir password inputus ir mygtuka
test('Testuojame, ar forma turi email ir password inputus ir mygtuka', () => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText('email');
  const passwordInput = screen.getByPlaceholderText('password');
  const button = screen.getByText('Login');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('Testuojame ar suvedus teisingus duomenis, bus atvaizduojama Prisijungete sekmingai!', () => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText('email');
  const passwordInput = screen.getByPlaceholderText('password');
  const button = screen.getByText('Login');

  fireEvent.change(emailInput, { target: { value: 'user@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: '1234' } });
  fireEvent.click(button);

  expect(screen.getByText('Prisijungete sekmingai!')).toBeInTheDocument();
});

test('Testuojame ar suvedus neteisingus duomenis, bus atvaizduojama Neteisingi duomenys!', () => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText('email');
  const passwordInput = screen.getByPlaceholderText('password');
  const button = screen.getByText('Login');

  fireEvent.change(emailInput, { target: { value: '123123' } });
  fireEvent.change(passwordInput, { target: { value: 'asdasd' } });
  fireEvent.click(button);

  expect(screen.getByText('Neteisingi duomenys!')).toBeInTheDocument();
});

import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

test('Tikriname ar input reiksme keiciasi', () => {
  render(<Input placeholder={'testavimo placeholder'} />);
  // Traukiu input'a pagal jo placeholder reiksme
  const input = screen.getByPlaceholderText('testavimo placeholder');
  // Tikrinu ar input suvestas tekstas atitinka mano ivedama teksta
  fireEvent.change(input, { target: { value: 'Hello world!' } });
  // Tikrinu ar atitinka reiksme
  expect(input.value).toBe('Hello world!');
});

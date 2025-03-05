import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

test('Tikriname, ar input elementas turi reikiamus atributus', () => {
  render(<Input placeholder={'testavimo placeholder'} />);
  // Traukiu input'a pagal jo placeholder reiksme
  const input = screen.getByPlaceholderText('testavimo placeholder');
  // Tikrinu ar input suvestas tekstas atitinka mano suvesta teksta
  fireEvent.change(input, { target: { value: 'Hello world!' } });
  // Tikrinu ar inpute atitinka reiksme
  expect(input.value).toBe('Hello world!');
});

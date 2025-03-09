import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('Testuojame ar Button.jsx atvaizduoja teksta', () => {
  // render() - atvaizduoja komponenta testavimo aplinkoje
  render(<Button title={'Paspausk mane!'} />);
  // Testuojam ar atvaizduotas tekstas mygtuke sutampa su paduotu tekstu
  // screen.getByText() - gauna elementa pagal teksta is testavimo aplinkos
  screen.getByText('Paspausk mane!');
});

test('Testuojame ar Button.jsx veikia paspaudimas', () => {
  // jest.fn() - netikra funckija, kuri fiksuoja mygtuko paspaudimas
  const handleClick = jest.fn();
  // render() - atvaizduoja komponenta testavimo aplinkoje
  render(<Button title={'Paspausk mane!'} onClick={handleClick} />);
  // Testuojam ar atvaizduotas tekstas mygtuke sutampa su paduotu tekstu
  // screen.getByText() - gauna elementa pagal teksta is testavimo aplinkos
  const button = screen.getByTestId('my-button');
  // fireEvent.click() - simuliuoja mygtuko paspaudima
  fireEvent.click(button);
  // expect() - tikrina ar funkcija buvo iskviesta nurodyta kieki kartu
  expect(handleClick).toHaveBeenCalledTimes(1);
});

import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

test('Counter.jsx padidina ir pamazina skaicius', () => {
  // render() - atvaizduoja komponenta testavimo aplinkoje
  render(<Counter />);
  const padidintiButton = screen.getByTestId('padidinti-button');
  const pamazintiButton = screen.getByTestId('pamazinti-button');
  // Tikriname ar paragrafe atvaizduotas skaicius 0
  const skaiciusParagrafe = screen.getByText('0');

  // Pasakome ka jam siuo atveju reikia paspausti, siuo atveju padidintiButton
  fireEvent.click(pamazintiButton);
  expect(skaiciusParagrafe).toHaveTextContent('-1');

  // Tikriname, ar pradinis skaičius yra 0
  fireEvent.click(padidintiButton);
  expect(skaiciusParagrafe).toHaveTextContent('0');
});

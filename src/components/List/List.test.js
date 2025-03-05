import { render, screen } from '@testing-library/react';
import { List } from './List';

test('Tikriname ar atvaizduoja List komponentas darzoves', () => {
  const items = ['obuolys', 'bananas', 'apelsinas'];
  render(<List items={items} />);
  // tikriname ar atvaizduoja darzoves kaip listo elementus
  items.forEach((item) => {
    const listItem = screen.getByText(item);
    expect(listItem).toBeInTheDocument();
    // Patikrinam ar tikrai <li> </li> elemente egzistuoja sitas tekstas
    expect(listItem.tagName).toBe('LI');
  });
});

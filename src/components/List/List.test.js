import { List } from './List';
import { render, screen } from '@testing-library/react';

test('Tikriname ar atvaizduoja List komponentas darzoves', () => {
  const items = ['asdasd'];
  render(<List items={items} />);
  // tikriname ar atvaizduoja darzoves kaip listo elementus
  items.forEach((item) => {
    const listItem = screen.getByText(item);
    expect(listItem).toBeInTheDocument();
    // Patikrinam ar tikrai <li> </li> elemente egzistuoja sitas tekstas
    expect(listItem.tagName).toBe('LI');
  });
});

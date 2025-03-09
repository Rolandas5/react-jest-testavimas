import './App.css';
import { Button } from './components/Button/Button';
import { Counter } from './components/Counter/Counter';
import { Input } from './components/Input/Input';
import { List } from './components/List/List';
import { Login } from './components/Login/Login';

function App() {
  const handleClick = () => {
    alert('As Button.jsx buvau paspaustas!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>React testing!</p>
        <Button title={'Paspausk mane!'} onClick={handleClick} />
        <Counter />
        <Input placeholder={'Irasyk savo emaila'} />
        <List items={['paprika', 'baklazanas', 'poras']} />
        <Login />
      </header>
    </div>
  );
}

export default App;

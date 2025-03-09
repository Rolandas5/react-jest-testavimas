import { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  // sukuria būseną, pavadintą email, kurios pradinė reikšmė yra tuščias string'as ('').
  // Funkcija setEmail leidžia pakeisti šią būseną.

  const handleLogin = () => {
    if (email === 'user@gmail.com' && password === '1234') {
      setMessage('Prisijungete sekmingai!');
    } else {
      setMessage('Neteisingi duomenys!');
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
};

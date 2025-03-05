import { useState } from 'react';

export const Input = ({ placeholder }) => {
  const [value, setValue] = useState('');

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <p>{value}</p>
    </>
  );
};

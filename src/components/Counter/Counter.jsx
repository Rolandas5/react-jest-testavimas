import { useState } from 'react';

export const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <p>{number}</p>
      <button
        onClick={() => setNumber(number + 1)}
        data-testid="padidinti-button"
      >
        Padidinti
      </button>
      <button
        onClick={() => setNumber(number - 1)}
        data-testid="pamazinti-button"
      >
        Pamazinti
      </button>
    </>
  );
};

import { useState } from 'react';

export const Counter = () => {
  const [number, setNumber] = useState(0);

  const handlePlusClick = () => {
    setNumber(number + 1);
  };

  const handleMinusClick = () => {
    setNumber(number - 1);
  };

  return (
    <>
      {/* P atsivaizduoja skaicius */}
      <p>{number}</p>
      {/* Padidina per 1 */}
      <button onClick={handlePlusClick} data-testid="padidinti-button">
        Padidinti
      </button>
      {/* Pamazina per 1 */}
      <button onClick={handleMinusClick} data-testid="pamazinti-button">
        Pamazinti
      </button>
    </>
  );
};

import { useState } from 'react';

export const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      onClick={() => setCount(previousCount => previousCount + 1)}
    >
      count is {count}
    </button>
  );
};

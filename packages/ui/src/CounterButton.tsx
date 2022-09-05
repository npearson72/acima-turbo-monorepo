import { useState } from 'react';

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      onClick={() => setCount(previousCount => previousCount + 1)}
    >
      count is {count}
    </button>
  );
}

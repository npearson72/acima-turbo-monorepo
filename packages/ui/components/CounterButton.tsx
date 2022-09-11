import { useState } from 'react';
import { Button } from '@mantine/core';

export const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount(previousCount => previousCount + 1)}>
      Count: {count}
    </Button>
  );
};

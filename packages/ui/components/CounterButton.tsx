import { useState } from 'react';
import { Button } from '@mantine/core';

export const CounterButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(previousCount => previousCount + 1);
  };

  return <Button onClick={handleClick}>Count: {count}</Button>;
};

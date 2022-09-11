import { Button } from '@mantine/core';
import { CounterButton } from '@acima/ui/components';
import styled from '@emotion/styled';

const Layout = styled.div`
  display: flex;
  gap: 10px;
`;

export const Basic = () => {
  return (
    <Layout>
      <Button variant="filled">Button</Button>
      <Button variant="light">Button</Button>
      <Button variant="outline">Button</Button>
    </Layout>
  );
};

export const Counter = () => {
  return <CounterButton />;
};

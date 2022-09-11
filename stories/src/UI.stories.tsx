import { Button } from '@mantine/core';
import styled from '@emotion/styled';

const Layout = styled.div`
  display: flex;
  gap: 10px;
`;

export const Buttons = () => {
  return (
    <Layout>
      <Button variant="filled">Button</Button>
      <Button variant="light">Button</Button>
      <Button variant="outline">Button</Button>
    </Layout>
  );
};

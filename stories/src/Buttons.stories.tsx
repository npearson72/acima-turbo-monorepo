import { useContext, useEffect } from 'react';
import { Button } from '@mantine/core';
import styled from '@emotion/styled';
import { ThemeContext } from '../../.ladle/components';

const Layout = styled.div`
  display: flex;
  gap: 10px;
`;

export const Buttons = ({ themeName }) => {
  const setThemeName = useContext(ThemeContext);

  useEffect(() => {
    setThemeName(themeName);
  }, [themeName, setThemeName]);

  return (
    <Layout>
      <Button variant="filled">Button</Button>
      <Button variant="light">Button</Button>
      <Button variant="outline">Button</Button>
    </Layout>
  );
};

Buttons.argTypes = {
  themeName: {
    options: ['theme1', 'theme2'],
    control: { type: 'select' },
    defaultValue: 'theme1'
  }
};

import { Button } from '@mantine/core';
import { css } from '@emotion/react';

const style = css`
  display: flex;
  gap: 10px;
`;

export default {
  title: 'Primitive / Buttons'
};

export const Story = () => {
  return (
    <div css={style}>
      <Button variant="filled">Button</Button>
      <Button variant="light">Button</Button>
      <Button variant="outline">Button</Button>
    </div>
  );
};

Story.storyName = 'All';

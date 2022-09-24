import { Button, Group } from '@mantine/core';

export default {
  title: 'Primitives / Buttons'
};

export const Story = () => {
  return (
    <Group spacing="sm">
      <Button variant="filled">Button</Button>
      <Button variant="light">Button</Button>
      <Button variant="outline">Button</Button>
    </Group>
  );
};

Story.storyName = 'All';

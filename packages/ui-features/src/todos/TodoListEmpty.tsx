import { Center, Stack, Text } from '@mantine/core';
import { Icon } from '@iconify/react';

export const TodoListEmpty: React.FC = () => {
  return (
    <Center style={{ height: '30vh' }}>
      <Stack>
        <Icon style={{ fontSize: '5rem' }} icon="fxemoji:partypopper" />
        <Text>No todos.</Text>
      </Stack>
    </Center>
  );
};

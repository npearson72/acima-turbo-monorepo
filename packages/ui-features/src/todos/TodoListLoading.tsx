import { Center, Loader } from '@mantine/core';

export const TodoListLoading: React.FC = () => {
  return (
    <Center style={{ height: '30vh' }}>
      <Loader size="xl" variant="dots" />
    </Center>
  );
};

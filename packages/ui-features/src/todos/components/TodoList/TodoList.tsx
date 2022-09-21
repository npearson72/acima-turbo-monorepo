import { Center, Stack, Text } from '@mantine/core';
import { Icon } from '@iconify/react';
import { Todo } from '../Todo';

interface Props {
  isLoading: boolean;
  data: Record<string, any>;
  story?: Record<string, any>;
}

const TodoList: React.FC<Props> = ({ isLoading, data, story }) => {
  if (isLoading) return <div>Loading...</div>;

  if (data.todos.length === 0) {
    return (
      <Center style={{ height: '30vh' }}>
        <Stack>
          <Icon style={{ fontSize: '5rem' }} icon="fxemoji:partypopper" />
          <Text>No todos.</Text>
        </Stack>
      </Center>
    );
  }

  return (
    <div className="todo-list">
      {data.todos.map((todo: any) => (
        <Todo key={todo.id} {...todo} story={story} />
      ))}
    </div>
  );
};

export { TodoList };

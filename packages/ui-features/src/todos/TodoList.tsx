import { useState } from 'react';
import { Stack, Tabs } from '@mantine/core';
import { Todo, TodoProps } from './Todo';

interface TodoListProps {
  todos: Pick<TodoProps, 'id' | 'title' | 'complete'>[];
  updateTodoMutation: Record<string, any>;
  deleteTodoMutation: Record<string, any>;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  updateTodoMutation,
  deleteTodoMutation
}) => {
  const [currentTab, setCurrentTab] = useState('available');

  return (
    <Stack spacing={3}>
      <Tabs defaultValue="available">
        <Tabs.List position="center">
          <Tabs.Tab
            value="available"
            onClick={() => setCurrentTab('available')}
          >
            Available
          </Tabs.Tab>
          <Tabs.Tab value="complete" onClick={() => setCurrentTab('complete')}>
            Complete
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          updateTodoMutation={updateTodoMutation}
          deleteTodoMutation={deleteTodoMutation}
          currentTab={currentTab}
          {...todo}
        />
      ))}
    </Stack>
  );
};

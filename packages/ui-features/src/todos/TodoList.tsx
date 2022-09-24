import { useState, useContext } from 'react';
import { Stack, Tabs } from '@mantine/core';
import { TodosQueryContext } from '@acima/ui-providers';
import { Todo, TodoListLoading, TodoListEmpty } from '.';

export const TodoList = () => {
  const [currentTab, setCurrentTab] = useState('available');
  const { data, isLoading } = useContext(TodosQueryContext);

  if (isLoading) return <TodoListLoading />;
  if (data.todos.length < 1) return <TodoListEmpty />;

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
      {data.todos.map((todo: any) => (
        <Todo key={todo.id} currentTab={currentTab} {...todo} />
      ))}
    </Stack>
  );
};

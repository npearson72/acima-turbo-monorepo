import { useState, useContext } from 'react';
import { Stack } from '@mantine/core';
import { TodosQueryContext } from '@acima/ui-providers';
import { Todo, TodoListTabs, TodoListLoading, TodoListEmpty } from '.';

export const TodoList = () => {
  const [currentTab, setCurrentTab] = useState<string>('available');
  const { data, isLoading } = useContext(TodosQueryContext);

  if (isLoading) return <TodoListLoading />;
  if (data.todos.length < 1) return <TodoListEmpty />;

  return (
    <Stack spacing={3}>
      <TodoListTabs setCurrentTab={setCurrentTab} />
      {data.todos.map((todo: any) => (
        <Todo key={todo.id} currentTab={currentTab} {...todo} />
      ))}
    </Stack>
  );
};

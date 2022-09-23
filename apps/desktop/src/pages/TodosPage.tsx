import { Box } from '@mantine/core';
import { useTodosQuery, useTodoMutation } from '@acima/ui-hooks';
import {
  TodoAddButton,
  TodoList,
  TodoListEmpty,
  TodoListLoading
} from '@acima/ui-features';

export const TodosPage = () => {
  const { isLoading, data } = useTodosQuery();

  const createTodoMutation = useTodoMutation('create');
  const deleteTodoMutation = useTodoMutation('delete');
  const updateTodoMutation = useTodoMutation('update');

  if (isLoading) {
    return (
      <Box>
        <TodoAddButton createTodoMutation={createTodoMutation} />
        <TodoListLoading />
      </Box>
    );
  }

  return (
    <Box>
      <TodoAddButton createTodoMutation={createTodoMutation} />
      {data.todos.length === 0 ? (
        <TodoListEmpty />
      ) : (
        <TodoList
          todos={data.todos}
          updateTodoMutation={updateTodoMutation}
          deleteTodoMutation={deleteTodoMutation}
        />
      )}
    </Box>
  );
};

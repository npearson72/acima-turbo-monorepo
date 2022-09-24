import { Box } from '@mantine/core';
import { TodoAddButton, TodoList } from '@acima/ui-features';

export const TodosPage = () => {
  return (
    <Box>
      <TodoAddButton />
      <TodoList />
    </Box>
  );
};

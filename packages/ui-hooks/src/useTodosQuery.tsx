import { useQuery } from '@tanstack/react-query';
import { todosApi } from '@acima/ui-apis';

const useTodosQuery = () => {
  return useQuery(['todos'], todosApi.getAll);
};

export { useTodosQuery };

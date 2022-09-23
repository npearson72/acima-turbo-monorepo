import { useQuery } from '@tanstack/react-query';
import { todosApi } from '@acima/ui-apis';

export const useTodosQuery = () => {
  return useQuery(['todos'], todosApi.getAll);
};

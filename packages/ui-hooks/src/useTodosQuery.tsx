import { useQuery } from '@tanstack/react-query';
import { todosApi } from '@acima/ui-apis';

const useTodosQuery = () => {
  const { isLoading, data } = useQuery(['todos'], todosApi.getAll);

  return { isLoading, data };
};

export { useTodosQuery };

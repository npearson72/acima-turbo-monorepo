import { useQuery } from '@tanstack/react-query';
import { todosRepo } from '@acima/ui/repos';

const useTodosQuery = () => {
  const { isLoading, data } = useQuery(['todos'], todosRepo.getAll);

  return { isLoading, data };
};

export { useTodosQuery };

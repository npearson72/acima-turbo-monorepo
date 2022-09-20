import { useQueryClient, useMutation } from '@tanstack/react-query';
import { todosApi } from '@acima/ui-apis';

const useTodosMutation = (
  action: string,
  options?: Record<string, any>
): any => {
  const queryClient = useQueryClient();

  let repo: any;

  if (action === 'create') repo = todosApi.create;
  if (action === 'update') repo = todosApi.update;
  if (action === 'delete') repo = todosApi.delete;

  const defaultOptions = {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    }
  };

  const mutation = useMutation(repo, options || defaultOptions);

  return { mutation };
};

export { useTodosMutation };

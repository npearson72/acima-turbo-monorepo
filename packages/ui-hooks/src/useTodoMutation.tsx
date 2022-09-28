import { useQueryClient, useMutation } from '@tanstack/react-query';
import { todosApi } from '@acima/ui-apis';

export const useTodoMutation = (
  action: string,
  options?: Record<string, any>
) => {
  const queryClient = useQueryClient();

  let api: any;

  if (action === 'create') api = todosApi.create;
  if (action === 'update') api = todosApi.update;
  if (action === 'delete') api = todosApi.delete;

  const defaultOptions = {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    }
  };

  return useMutation(api, options || defaultOptions);
};

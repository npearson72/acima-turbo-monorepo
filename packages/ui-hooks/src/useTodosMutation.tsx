import { useQueryClient, useMutation } from '@tanstack/react-query';
import { todosApi } from '@acima/ui-apis';

const useTodosMutation = (
  action: string,
  invalidateQueries: boolean = true
) => {
  const queryClient = useQueryClient();

  let repo: any;

  if (action === 'create') repo = todosApi.create;
  if (action === 'update') repo = todosApi.update;
  if (action === 'delete') repo = todosApi.delete;

  const mutation = useMutation(repo, {
    onSuccess: () => {
      if (invalidateQueries) {
        queryClient.invalidateQueries(['todos']);
      }
    }
  });

  return { mutation };
};

export { useTodosMutation };

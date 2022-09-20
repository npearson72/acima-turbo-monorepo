import { useQueryClient, useMutation } from '@tanstack/react-query';
import { todosRepo } from '@acima/ui-repos';

const useTodosMutation = (
  action: string,
  invalidateQueries: boolean = true
) => {
  const queryClient = useQueryClient();

  let repo: any;

  if (action === 'create') repo = todosRepo.create;
  if (action === 'update') repo = todosRepo.update;
  if (action === 'delete') repo = todosRepo.delete;

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

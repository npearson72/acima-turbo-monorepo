import { useQueryClient, useMutation } from '@tanstack/react-query';
import { todosRepo } from '@acima/ui-repos';

const useTodosMutation = (type: string, invalidateQueries: boolean = true) => {
  const queryClient = useQueryClient();

  let repo: any;

  if (type === 'post') {
    repo = todosRepo.post;
  }

  if (type === 'update') {
    repo = todosRepo.update;
  }

  if (type === 'delete') {
    repo = todosRepo.delete;
  }

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

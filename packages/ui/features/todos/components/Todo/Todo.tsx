import { useState, lazy, Suspense } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { todosRepo } from '@acima/ui/features/todos/repos';

let TodoMobile: any;
let TodoWeb: any;

if (process.env.PLATFORM === 'mobile') {
  TodoMobile = lazy(() => import('./Todo.mobile'));
}

if (process.env.PLATFORM === 'web') {
  TodoWeb = lazy(() => import('./Todo.web'));
}

if (process.env.PLATFORM === 'story') {
  TodoMobile = lazy(() => import('./Todo.mobile'));
  TodoWeb = lazy(() => import('./Todo.web'));
}

interface Props {
  id: number;
  title: string;
  complete: boolean;
  story?: Record<string, any>;
}

const Todo: React.FC<Props> = props => {
  const { id, complete, story } = props;
  const [isChecked, setIsChecked] = useState(complete);

  const queryClient = useQueryClient();
  const mutation = useMutation(todosRepo.update, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    }
  });

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;

    setIsChecked(checked);

    mutation.mutate({ id, complete: checked });
  };

  if (!TodoWeb || story?.mobile) {
    return (
      <Suspense>
        <TodoMobile
          {...props}
          isChecked={isChecked}
          handleCheck={handleCheck}
        />
      </Suspense>
    );
  }

  return (
    <Suspense>
      <TodoWeb {...props} isChecked={isChecked} handleCheck={handleCheck} />
    </Suspense>
  );
};

export { Todo };

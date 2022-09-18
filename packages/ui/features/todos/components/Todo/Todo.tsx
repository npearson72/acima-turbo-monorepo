import { useState } from 'react';
import { isPlatform } from '@ionic/react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import TodoMobile from './Todo.mobile';
import TodoWeb from './Todo.web';
import { todosRepo } from '../../repos';

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

  if (story?.mobile || isPlatform('mobile')) {
    return (
      <TodoMobile {...props} isChecked={isChecked} handleCheck={handleCheck} />
    );
  }

  return <TodoWeb {...props} isChecked={isChecked} handleCheck={handleCheck} />;
};

export { Todo };

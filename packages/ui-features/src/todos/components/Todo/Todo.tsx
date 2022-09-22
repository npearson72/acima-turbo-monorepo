import { Suspense } from 'react';
import { usePlatformTodo } from './usePlatformTodo';

interface Props {
  id: number;
  title: string;
  complete: boolean;
  story?: Record<string, any>;
}

const Todo: React.FC<Props> = props => {
  const { story } = props;
  const { PlatformTodo } = usePlatformTodo(story);

  return (
    <Suspense>
      <PlatformTodo {...props} />
    </Suspense>
  );
};

export { Todo };

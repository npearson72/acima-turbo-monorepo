import { Suspense } from 'react';
import { TodoMobile, TodoWeb } from './loadModules';

interface Props {
  id: number;
  title: string;
  complete: boolean;
  story?: Record<string, any>;
}

const Todo: React.FC<Props> = props => {
  const { story } = props;

  if (!TodoWeb || story?.mobile) {
    return (
      <Suspense>
        <TodoMobile {...props} />
      </Suspense>
    );
  }

  return (
    <Suspense>
      <TodoWeb {...props} />
    </Suspense>
  );
};

export { Todo };

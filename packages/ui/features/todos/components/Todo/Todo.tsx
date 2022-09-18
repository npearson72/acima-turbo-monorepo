import { useState } from 'react';
import { isPlatform } from '@ionic/react';
import TodoMobile from './Todo.mobile';
import TodoWeb from './Todo.web';

interface Props {
  id: number;
  title: string;
  complete: boolean;
  story?: Record<string, any>;
}

const Todo: React.FC<Props> = props => {
  const { complete, story } = props;
  const [isChecked, setIsChecked] = useState(complete);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;

    setIsChecked(checked);
  };

  if (story?.mobile || isPlatform('mobile')) {
    return (
      <TodoMobile {...props} isChecked={isChecked} handleCheck={handleCheck} />
    );
  }

  return <TodoWeb {...props} isChecked={isChecked} handleCheck={handleCheck} />;
};

export { Todo };

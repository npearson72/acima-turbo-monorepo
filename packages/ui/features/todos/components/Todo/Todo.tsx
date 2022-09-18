import { useState } from 'react';
import { isPlatform } from '@ionic/react';
import TodoMobile from './Todo.mobile';
import TodoWeb from './Todo.web';

interface Props {
  id: number;
  title: string;
  complete: boolean;
  story?: {
    [key: string]: any;
  };
}

const Todo: React.FC<Props> = ({ id, title, complete, story }) => {
  const [isChecked, setIsChecked] = useState(complete);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;

    setIsChecked(checked);
  };

  if (story?.mobile || isPlatform('mobile')) {
    return (
      <TodoMobile
        id={id}
        title={title}
        isChecked={isChecked}
        handleCheck={handleCheck}
      />
    );
  }

  return (
    <TodoWeb
      id={id}
      title={title}
      isChecked={isChecked}
      handleCheck={handleCheck}
    />
  );
};

export { Todo };

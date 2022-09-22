import { useState, Suspense } from 'react';
import { usePlatformModal } from './Modal/usePlatformModal';
import { usePlatformAddTodoButton } from './usePlatformAddTodoButton';

interface Props {
  story?: Record<string, any>;
  icon?: any;
}

const AddTodoButton: React.FC<Props> = ({ story }) => {
  const [opened, setOpened] = useState(false);
  const { PlatformAddTodoButton } = usePlatformAddTodoButton(story);
  const { PlatformModal } = usePlatformModal(story);

  return (
    <Suspense>
      <PlatformModal opened={opened} setOpened={setOpened} />
      <PlatformAddTodoButton setOpened={setOpened} />
    </Suspense>
  );
};

export { AddTodoButton };

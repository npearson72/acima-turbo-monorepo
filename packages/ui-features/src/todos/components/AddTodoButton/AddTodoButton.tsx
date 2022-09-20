import { useState } from 'react';
import { Button } from '@mantine/core';
import { Icon } from '@iconify/react';
import { css } from '@emotion/react';
import { Modal } from './Modal';

const style = css`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem 0.5rem 0.5rem;

  .mantine-Button-label {
    overflow: inherit;

    .icon {
      font-size: 1.3rem;
      margin-right: 10px;
    }

    .text {
      font-size: 0.9rem;
    }
  }
`;

interface Props {
  story?: Record<string, any>;
}

const AddTodoButton: React.FC<Props> = ({ story }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} setOpened={setOpened} />
      <Button variant="white" css={style} onClick={() => setOpened(true)}>
        <Icon icon="ic:round-add-task" className="icon" />
        <div className="text">Add a todo</div>
      </Button>
    </>
  );
};

export { AddTodoButton };

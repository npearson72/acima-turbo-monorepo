import { useState } from 'react';
import { Paper, Group } from '@mantine/core';
import { css } from '@emotion/react';
import { Icon } from '@iconify/react';
import { useTodosMutation } from '@acima/ui-hooks';
import { Checkbox } from './Checkbox';

const style = css`
  border: 1px solid #dfdfdf;

  &:hover {
    background: #f9f9f9;
  }

  .icon-trash {
    color: #c5c5c5;
    cursor: pointer;
    display: none;
    font-size: 1.5rem;

    &.show {
      display: block;
    }

    &:hover {
      color: #a7a7a7;
    }
  }
`;

interface Props {
  id: number;
  title: string;
  complete: boolean;
}

const TodoWeb: React.FC<Props> = props => {
  const { id } = props;
  const [showTrash, setShowTrash] = useState(false);

  const { mutation } = useTodosMutation('delete') as any;

  const toggleTrash = () => {
    setShowTrash(!showTrash);
  };

  const deleteTodo = () => {
    mutation.mutate({ id: Number(id) });
  };

  return (
    <Paper
      p="sm"
      mb={-1}
      withBorder
      css={style}
      onMouseEnter={toggleTrash}
      onMouseLeave={toggleTrash}
    >
      <Group position="apart">
        <Checkbox {...props} />
        <Icon
          icon="icons8:trash"
          className={`icon-trash ${showTrash ? 'show' : ''}`}
          onClick={deleteTodo}
        />
      </Group>
    </Paper>
  );
};

export default TodoWeb;

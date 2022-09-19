import { useState } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { Paper, Group } from '@mantine/core';
import { css } from '@emotion/react';
import { Icon } from '@iconify/react';
import { todosRepo } from '@acima/ui/features/todos/repos';
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
  isChecked: boolean;
  handleCheck: React.ChangeEventHandler<HTMLInputElement>;
}

const TodoWeb: React.FC<Props> = props => {
  const { id } = props;
  const [showTrash, setShowTrash] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation(todosRepo.delete, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['todos']);
    }
  });

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

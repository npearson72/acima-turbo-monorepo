import { useContext } from 'react';
import { Paper } from '@mantine/core';
import { Icon } from '@iconify/react';
import { TodosQueryContext } from '@acima/ui-providers';

type Props = {
  id: number;
  parentHovering: boolean;
};

export const TodoDelete = ({ id, parentHovering }: Props) => {
  const { deleteTodoMutation } = useContext(TodosQueryContext);
  const { mutate: mutateDelete } = deleteTodoMutation;

  return (
    <Paper
      onClick={() => mutateDelete({ id })}
      sx={theme => ({
        color: theme.colors.dark[0],
        cursor: 'pointer',
        display: parentHovering ? 'block' : 'none',
        fontSize: '1.5rem',
        lineHeight: 0,
        padding: 0,

        '&:hover': {
          color: theme.colors.dark[2]
        }
      })}
    >
      <Icon icon="icons8:trash" />
    </Paper>
  );
};

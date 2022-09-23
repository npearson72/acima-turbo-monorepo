import { Paper } from '@mantine/core';
import { Icon } from '@iconify/react';

interface TodoDeleteProps {
  id: number;
  deleteTodoMutation: Record<string, any>;
  parentHovering: boolean;
}

export const TodoDelete = ({
  id,
  deleteTodoMutation,
  parentHovering
}: TodoDeleteProps) => {
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

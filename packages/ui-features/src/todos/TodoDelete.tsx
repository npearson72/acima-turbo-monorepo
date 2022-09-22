import { Paper } from '@mantine/core';
import { Icon } from '@iconify/react';

const DeleteIcon = () => <Icon icon="icons8:trash" />;

interface TodoDeleteProps {
  id: number;
  deleteTodoMutation: Record<string, any>;
  parentHovering: boolean;
  children?: React.ReactNode;
}

export const TodoDelete: React.FC<TodoDeleteProps> = ({
  id,
  deleteTodoMutation,
  parentHovering,
  children
}) => {
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
      {children || <DeleteIcon />}
    </Paper>
  );
};

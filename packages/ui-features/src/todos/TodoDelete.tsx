import { useContext } from 'react';
import { ActionIcon } from '@mantine/core';
import { Icon } from '@iconify/react';
import { TodosQueryContext } from '@acima/ui-providers';

type Props = {
  id: number;
  displayDelete: boolean;
};

export const TodoDelete = ({ id, displayDelete }: Props) => {
  const { deleteTodoMutation } = useContext(TodosQueryContext);

  const { mutate: mutateDelete } = deleteTodoMutation;

  return (
    <ActionIcon
      title="Delete"
      onClick={() => mutateDelete({ id })}
      sx={theme => ({
        color: theme.colors.dark[0],
        cursor: 'pointer',
        display: displayDelete ? 'block' : 'none',
        fontSize: '1.5rem',
        lineHeight: 0,

        '&:focus': {
          display: 'block'
        },

        '&:hover': {
          background: 'none',
          color: theme.colors.dark[2]
        }
      })}
    >
      <Icon icon="icons8:trash" />
    </ActionIcon>
  );
};

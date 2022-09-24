import { useState } from 'react';
import { Checkbox, Group, Paper, Text } from '@mantine/core';
import { TodoDelete } from './TodoDelete';

export interface TodoProps {
  id: number;
  title: string;
  complete: boolean;
  currentTab: string;
  updateTodoMutation: Record<string, any>;
  deleteTodoMutation: Record<string, any>;
}

export const Todo = ({
  id,
  title,
  complete,
  currentTab,
  updateTodoMutation,
  deleteTodoMutation
}: TodoProps) => {
  const [checked, setChecked] = useState(complete);
  const [hovering, setHovering] = useState(false);

  const { mutate: mutateUpdate } = updateTodoMutation;

  const handleCheck = () => {
    setChecked(!checked);
    // Todos are moved to other tab once checked, so clear hovering state.
    setHovering(!hovering);
    mutateUpdate({ id, complete: !checked });
  };

  if (currentTab === 'available' && checked) return null;
  if (currentTab === 'complete' && !checked) return null;

  return (
    <Paper
      shadow="xs"
      p="sm"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Group position="apart" sx={{ height: '2rem' }}>
        <Checkbox
          value={id}
          checked={checked}
          onChange={handleCheck}
          label={<Text align="left">{title}</Text>}
        />
        <TodoDelete
          id={id}
          deleteTodoMutation={deleteTodoMutation}
          parentHovering={hovering}
        />
      </Group>
    </Paper>
  );
};

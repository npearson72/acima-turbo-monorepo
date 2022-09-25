import { useState } from 'react';
import { Box, Button, Modal } from '@mantine/core';
import { Icon } from '@iconify/react';
import { TodoAddForm } from './TodoAddForm';

export const TodoAddButton = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Box>
      <Modal
        opened={opened}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <TodoAddForm setOpened={setOpened} />
      </Modal>
      <Button
        leftIcon={<Icon icon="ic:round-add-task" />}
        onClick={() => setOpened(true)}
        sx={{ '.mantine-Button-icon': { fontSize: '1.3rem' } }}
      >
        Add a Todo
      </Button>
    </Box>
  );
};

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
        onClick={() => setOpened(true)}
        sx={{
          paddingLeft: 10,
          marginBottom: '1.5rem',

          '.icon': {
            fontSize: '1.2rem',
            marginRight: 5
          }
        }}
      >
        <Icon icon="ic:round-add-task" className="icon" />
        <div className="text">Add Todo</div>
      </Button>
    </Box>
  );
};

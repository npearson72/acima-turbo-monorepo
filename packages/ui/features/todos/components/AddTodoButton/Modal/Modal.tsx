import { Modal as MantineModal } from '@mantine/core';
import { Form } from './Form';

interface Props {
  opened: boolean;
  setOpened: (value: boolean) => void;
}

const Modal: React.FC<Props> = ({ opened, setOpened }) => {
  return (
    <MantineModal
      opened={opened}
      overlayOpacity={0.2}
      withCloseButton={false}
      onClose={() => setOpened(false)}
    >
      <Form />
    </MantineModal>
  );
};

export { Modal };

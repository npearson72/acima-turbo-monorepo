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
      withCloseButton={false}
      onClose={() => setOpened(false)}
    >
      <Form setOpened={setOpened} />
    </MantineModal>
  );
};

export { Modal };
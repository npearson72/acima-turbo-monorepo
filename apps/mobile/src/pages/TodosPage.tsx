import { useRef } from 'react';
import { TodoList, TodoAddForm, TodoListRefresher } from '../components/todos';
import { Modal } from '../components';
import { PageWrapper } from './PageWrapper';

const TodosPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLIonModalElement>(null);

  const dismissModal = () => {
    modalRef.current?.dismiss();
  };

  return (
    <PageWrapper pageRef={pageRef}>
      <Modal pageRef={pageRef} modalRef={modalRef} dismissModal={dismissModal}>
        <TodoAddForm dismissModal={dismissModal} />
      </Modal>
      <TodoListRefresher />
      <TodoList />
    </PageWrapper>
  );
};

export { TodosPage };

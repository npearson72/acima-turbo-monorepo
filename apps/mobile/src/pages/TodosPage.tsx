import { useRef } from 'react';
import { useTodosQuery, useTodoMutation } from '@acima/ui-hooks';
import { TodoListEmpty, TodoListLoading } from '@acima/ui-features';
import { TodoList, TodoAddForm, TodoListRefresher } from '../components/todos';
import { Modal } from '../components';
import { PageWrapper } from './PageWrapper';

const TodosPage: React.FC = () => {
  const { isLoading, data } = useTodosQuery();
  const createTodoMutation = useTodoMutation('create');
  const deleteTodoMutation = useTodoMutation('delete');
  const updateTodoMutation = useTodoMutation('update');

  const pageRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLIonModalElement>(null);

  const dismissModal = () => {
    modalRef.current?.dismiss();
  };

  if (isLoading) {
    return (
      <PageWrapper pageRef={pageRef}>
        <TodoListLoading />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper pageRef={pageRef}>
      <Modal pageRef={pageRef} modalRef={modalRef} dismissModal={dismissModal}>
        <TodoAddForm
          createTodoMutation={createTodoMutation}
          dismissModal={dismissModal}
        />
      </Modal>
      <TodoListRefresher />

      {data.todos.length === 0 ? (
        <TodoListEmpty />
      ) : (
        <TodoList
          todos={data.todos}
          updateTodoMutation={updateTodoMutation}
          deleteTodoMutation={deleteTodoMutation}
        />
      )}
    </PageWrapper>
  );
};

export { TodosPage };

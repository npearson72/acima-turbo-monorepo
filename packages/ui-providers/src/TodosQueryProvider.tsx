import { createContext, useMemo } from 'react';
import {
  QueryObserverResult,
  QueryClientProvider,
  QueryClient
} from '@tanstack/react-query';
import { useTodosQuery, useTodoMutation } from '@acima/ui-hooks';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

type TodosQueryContextState = {
  data: {
    todos: Record<string, any>[];
  };
  isLoading: boolean;
  refetch: () => Promise<QueryObserverResult<any, unknown>>;
  remove: () => void;
  createTodoMutation: Record<string, any>;
  deleteTodoMutation: Record<string, any>;
  updateTodoMutation: Record<string, any>;
};

export const TodosQueryContext = createContext({} as TodosQueryContextState);

export const CoreProvider = ({ children }: Props) => {
  const { data, isLoading, refetch, remove } = useTodosQuery();

  const createTodoMutation = useTodoMutation('create');
  const deleteTodoMutation = useTodoMutation('delete');
  const updateTodoMutation = useTodoMutation('update');

  const value = useMemo(() => {
    return {
      data,
      isLoading,
      refetch,
      remove,
      createTodoMutation,
      deleteTodoMutation,
      updateTodoMutation
    };
  }, [
    data,
    isLoading,
    refetch,
    remove,
    createTodoMutation,
    deleteTodoMutation,
    updateTodoMutation
  ]);

  return (
    <TodosQueryContext.Provider value={value}>
      {children}
    </TodosQueryContext.Provider>
  );
};

type Props = {
  children: React.ReactElement;
};

export const TodosQueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CoreProvider>{children}</CoreProvider>
    </QueryClientProvider>
  );
};

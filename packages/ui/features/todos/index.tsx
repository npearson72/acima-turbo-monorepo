import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { TodosView } from './views';

const queryClient = new QueryClient();

const Todos: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodosView />
    </QueryClientProvider>
  );
};

export { Todos };

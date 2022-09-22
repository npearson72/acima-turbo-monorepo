import { AppShell } from '@mantine/core';
import { TodosPage } from './pages';

const App: React.FC = () => {
  return (
    <AppShell>
      <TodosPage />
    </AppShell>
  );
};

export default App;

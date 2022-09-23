import { AppShell } from '@mantine/core';
import { TodosPage } from './pages';

const App = () => {
  return (
    <AppShell sx={{ width: 500, height: 600 }}>
      <TodosPage />
    </AppShell>
  );
};

export default App;

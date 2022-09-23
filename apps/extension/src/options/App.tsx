import { AppShell, Text } from '@mantine/core';

const App = () => {
  return (
    <AppShell sx={{ width: 400, height: 400 }}>
      <Text component="h1">Options</Text>
      <Text component="p">Options go here!</Text>
    </AppShell>
  );
};

export default App;

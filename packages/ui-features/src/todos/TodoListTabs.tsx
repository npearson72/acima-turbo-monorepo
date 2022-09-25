import { Tabs } from '@mantine/core';

type Props = {
  setCurrentTab: (value: string) => void;
};

export const TodoListTabs = ({ setCurrentTab }: Props) => {
  return (
    <Tabs defaultValue="available">
      <Tabs.List position="center">
        <Tabs.Tab value="available" onClick={() => setCurrentTab('available')}>
          Available
        </Tabs.Tab>
        <Tabs.Tab value="complete" onClick={() => setCurrentTab('complete')}>
          Complete
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

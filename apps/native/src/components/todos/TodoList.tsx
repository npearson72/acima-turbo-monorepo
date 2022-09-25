import { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { TodosQueryContext } from '@acima/ui-providers';
import { Todo } from './Todo';

export const TodoList = () => {
  const { data, isLoading } = useContext(TodosQueryContext);
  const todoRefs: Record<string, Swipeable> = {};

  const closeTodos = (id: number) => {
    for (const key in todoRefs) {
      if (Number(key) !== id) {
        todoRefs[key].close();
      }
    }
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        style={{ height: '100%' }}
        data={data.todos}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          const { id, title, complete } = item;

          return (
            <Todo {...{ id, title, complete, index, todoRefs, closeTodos }} />
          );
        }}
      />
    </View>
  );
};

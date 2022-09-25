import { useContext, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Checkbox, Box } from 'native-base';
import {
  GestureHandlerRootView,
  Swipeable
} from 'react-native-gesture-handler';
import { TodosQueryContext } from '@acima/ui-providers';
import { TodoDeleteButton } from './TodoDeleteButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: '#e9e9e9',
    borderWidth: 1,
    marginLeft: 0,
    marginRight: 0,
    padding: 18
  },
  text: {
    fontSize: 16
  }
});

type Props = {
  id: number;
  title: string;
  complete: boolean;
  index: number;
  todoRefs: Record<string, Swipeable>;
  closeTodos: (id: number) => void;
};

export const Todo = ({
  id,
  title,
  complete,
  index,
  todoRefs,
  closeTodos
}: Props) => {
  const [checked, setChecked] = useState(complete);
  const { updateTodoMutation } = useContext(TodosQueryContext);

  const { mutate: mutateUpdate } = updateTodoMutation;

  const handleCheck = () => {
    setChecked(!checked);
    mutateUpdate({ id, complete: !checked });
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        ref={(ref: Swipeable) => {
          todoRefs[id] = ref;
        }}
        onSwipeableWillOpen={() => closeTodos(id)}
        overshootRight={false}
        renderRightActions={() => <TodoDeleteButton id={id} />}
      >
        <Box
          style={[
            styles.container,
            {
              marginTop: index === 0 ? 0 : -1
            }
          ]}
        >
          <Checkbox
            value={String(id)}
            isChecked={checked}
            onChange={handleCheck}
          >
            <Text style={styles.text}>{title}</Text>
          </Checkbox>
        </Box>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

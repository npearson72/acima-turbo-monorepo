import { useContext } from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { TodosQueryContext } from '@acima/ui-providers';

type Props = {
  id: number;
};

export const TodoDeleteButton = ({ id }: Props) => {
  const { deleteTodoMutation } = useContext(TodosQueryContext);

  const { mutate: mutateDelete } = deleteTodoMutation;

  return (
    <RectButton
      onPress={() => mutateDelete({ id })}
      style={{
        backgroundColor: 'red',
        width: 70,
        alignItems: 'flex-end',
        justifyContent: 'center'
      }}
    >
      <Text
        style={{
          color: 'white',
          fontWeight: '600',
          backgroundColor: 'red',
          marginRight: 10
        }}
      >
        Delete
      </Text>
    </RectButton>
  );
};

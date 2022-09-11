import { CounterButton } from '@acima/ui/components';
import styled from '@emotion/styled';

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 400px;
  justify-content: center;
  width: 400px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <CounterButton />
    </Container>
  );
};

export default App;

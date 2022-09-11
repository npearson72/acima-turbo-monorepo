import { CounterButton } from '@acima/ui/components';
import styled from '@emotion/styled';

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <Container>
      <CounterButton />
    </Container>
  );
};

export default App;

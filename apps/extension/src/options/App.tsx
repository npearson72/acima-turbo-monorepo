import styled from '@emotion/styled';

const Container = styled.div`
  height: 400px;
  text-align: center;
  width: 400px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <h1>Options</h1>
      <p>Options go here!</p>
    </Container>
  );
};

export default App;

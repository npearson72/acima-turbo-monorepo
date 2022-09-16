import { Todos } from '@acima/ui/features/todos';
import { css } from '@emotion/react';

const style = css`
  padding: 2rem;
`;

const App: React.FC = () => {
  return (
    <div css={style}>
      <Todos />
    </div>
  );
};

export default App;

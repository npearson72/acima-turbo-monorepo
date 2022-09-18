import { Todos } from '@acima/ui/features';
import { css } from '@emotion/react';

const style = css`
  padding: 2rem;
  height: 600px;
  width: 500px;
`;

const App: React.FC = () => {
  return (
    <div css={style}>
      <Todos />
    </div>
  );
};

export default App;

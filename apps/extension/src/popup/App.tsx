import { CounterButton } from '@acima/ui/components';
import { css } from '@emotion/react';

const style = css`
  align-items: center;
  display: flex;
  height: 400px;
  justify-content: center;
  width: 400px;
`;

const App: React.FC = () => {
  return (
    <div css={style}>
      <CounterButton />
    </div>
  );
};

export default App;

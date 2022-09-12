import { css } from '@emotion/react';

const style = css`
  height: 400px;
  text-align: center;
  width: 400px;
`;

const App: React.FC = () => {
  return (
    <div css={style}>
      <h1>Options</h1>
      <p>Options go here!</p>
    </div>
  );
};

export default App;

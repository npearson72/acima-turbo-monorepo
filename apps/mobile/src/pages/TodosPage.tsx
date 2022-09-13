import { CounterButton } from '@acima/ui/components';
import { css } from '@emotion/react';
import PageWrapper from './PageWrapper';

const style = css`
  button {
    margin-top: 5rem;
  }
`;

const TodosPage: React.FC = () => {
  return (
    <PageWrapper css={style}>
      <h1>Todos</h1>
      <CounterButton />
    </PageWrapper>
  );
};

export default TodosPage;

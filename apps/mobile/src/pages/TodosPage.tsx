import { Todos } from '@acima/ui/features';
import PageWrapper from './PageWrapper';

const TodosPage: React.FC = () => {
  return (
    <PageWrapper>
      <h1>Todos</h1>
      <Todos />
    </PageWrapper>
  );
};

export { TodosPage };

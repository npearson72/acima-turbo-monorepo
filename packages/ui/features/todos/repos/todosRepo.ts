import { httpClient } from '../utils';

const todosRepo = {
  async getAll() {
    const { data } = await httpClient.get('todos');

    return data;
  }
};

export { todosRepo };

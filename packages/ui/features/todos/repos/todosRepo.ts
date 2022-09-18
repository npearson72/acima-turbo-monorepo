import { httpClient } from '../utils';

const todosRepo = {
  async getAll() {
    const { data } = await httpClient.get('todos');

    return data;
  },

  async update(params: Record<string, any>) {
    const { data } = await httpClient.patch(`todos/${params.id}`, params);

    return data;
  }
};

export { todosRepo };

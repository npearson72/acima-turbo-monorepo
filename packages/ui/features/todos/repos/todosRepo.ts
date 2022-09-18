import { httpClient, mockHttpClient } from '../utils';

const client = process.env.NODE_ENV === 'stories' ? mockHttpClient : httpClient;

const todosRepo = {
  async getAll() {
    const { data } = await client.get('todos');

    return data;
  },

  async update(params: Record<string, any>) {
    const { data } = await client.patch(`todos/${params.id}`, params);

    return data;
  }
};

export { todosRepo };

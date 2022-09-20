import { httpClient, mockHttpClient } from './httpClient';

const client = process.env.NODE_ENV === 'stories' ? mockHttpClient : httpClient;

const todosRepo = {
  async getAll() {
    const { data } = await client.get('todos');

    return data;
  },

  async create(params: Record<string, any>) {
    const { data } = await client.post('todos', params);

    return data;
  },

  async update(params: Record<string, any>) {
    const { data } = await client.patch(`todos/${params.id}`, params);

    return data;
  },

  async delete({ id }: { id: number }) {
    const { data } = await client.delete(`todos/${id}`);

    return data;
  }
};

export { todosRepo };

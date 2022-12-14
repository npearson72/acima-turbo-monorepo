import { httpClient, mockHttpClient } from './httpClient';

const client = process.env.PLATFORM === 'stories' ? mockHttpClient : httpClient;

const todosApi = {
  async getAll() {
    const { data } = await client.get('todos');

    return data;
  },

  async create(params: { title: string; complete?: boolean }) {
    const { data } = await client.post('todos', params);

    return data;
  },

  async update(params: { id: number; title?: string; complete?: boolean }) {
    const { data } = await client.patch(`todos/${params.id}`, params);

    return data;
  },

  async delete({ id }: { id: number }) {
    const { data } = await client.delete(`todos/${id}`);

    return data;
  }
};

export { todosApi };

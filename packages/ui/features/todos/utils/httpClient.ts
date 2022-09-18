import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:4000/api/v1'
});

const mockHttpClient = {
  get: async () => {
    return { data: {} };
  },

  patch: async (id: string, params: Record<string, any>) => {
    return { data: {} };
  }
};

export { httpClient, mockHttpClient };

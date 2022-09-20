import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:4000/api/v1'
});

/* eslint-disable @typescript-eslint/no-unused-vars */
const mockHttpClient = {
  get: async (path: string) => {
    return { data: {} };
  },

  post: async (path: string, params: Record<string, any>) => {
    return { data: {} };
  },

  patch: async (path: string, params: Record<string, any>) => {
    return { data: {} };
  },

  delete: async (path: string) => {
    return { data: {} };
  }
};
/* eslint-enable @typescript-eslint/no-unused-vars */

export { httpClient, mockHttpClient };

import axios from 'axios';

export const httpClient = axios.create({
  baseURL: `${process.env.SERVER_URL}/api/v1/`
});

/* eslint-disable @typescript-eslint/no-unused-vars */
export const mockHttpClient = {
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

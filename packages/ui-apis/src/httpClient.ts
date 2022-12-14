import axios from 'axios';

export const httpClient = axios.create({
  baseURL: `${process.env.SERVER_URL}/api/v1/`
});

/* eslint-disable @typescript-eslint/no-unused-vars */
export const mockHttpClient = {
  get: async (path: string) => {
    return {
      data: {
        todos: [
          {
            id: 1,
            title: 'Example 1',
            complete: false
          },
          {
            id: 2,
            title: 'Example 2',
            complete: false
          },
          {
            id: 3,
            title: 'Example 3',
            complete: false
          }
        ]
      }
    };
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

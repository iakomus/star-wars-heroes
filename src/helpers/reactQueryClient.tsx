/* eslint-disable import/prefer-default-export */
import { QueryClient } from 'react-query';

export const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // results cached for a minute
    },
  },
});

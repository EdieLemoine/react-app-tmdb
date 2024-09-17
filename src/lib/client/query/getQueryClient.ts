import { isServer, QueryClient } from '@tanstack/react-query';

let browserQueryClient: QueryClient | undefined = undefined;

const makeQueryClient = () => {
  return new QueryClient();
};

export const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient();
    }

    return browserQueryClient;
  }
};

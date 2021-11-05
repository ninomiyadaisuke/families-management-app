import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Loading } from 'components/atoms/Utilities';

import 'styles/base.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const queryCache = new QueryCache();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      },
    },
    queryCache,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Loading />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;

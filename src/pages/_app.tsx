import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Loading } from 'components/atoms/Utilities';

import 'styles/base.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsLoading(true));
    router.events.on('routeChangeComplete', () => setIsLoading(false));
    return () => {
      router.events.off('routeChangeStart', () => setIsLoading(true));
      router.events.off('routeChangeComplete', () => setIsLoading(false));
    };
  }, [setIsLoading]);

  return (
    <QueryClientProvider client={queryClient}>
      <Loading isLoading={isLoading} />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;

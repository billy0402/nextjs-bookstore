import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production';
import { Provider } from 'react-redux';

import Layout from '@/components/Layout';
import { theme } from '@/fixtures/theme';
import { queryClient } from '@/helpers/query-client';
import wrapper from '@/redux/store';
import '@/styles/globals.scss';

// initMocks();

const App = ({ Component, ...pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Head>
            <title>Next.js Template</title>
          </Head>
          <Layout>
            <Component {...props.pageProps} />
          </Layout>
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;

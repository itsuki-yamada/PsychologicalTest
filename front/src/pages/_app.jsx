import { ChakraProvider } from '@chakra-ui/react';
import HomePage from 'components/layout/HomePage';
import theme from 'lib/theme';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <HomePage router={router}>
        <Component {...pageProps} />
      </HomePage>
    </ChakraProvider>
  );
}

export default MyApp;

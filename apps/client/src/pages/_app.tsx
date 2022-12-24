import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { dedupExchange, fetchExchange } from "urql";
import { devtoolsExchange } from "@urql/devtools";

import { suspenseExchange } from "@urql/exchange-suspense";

const theme = extendTheme({
  fonts: {
    heading: "Noto Sans JP, sans-serif",
    body: "Noto Sans JP, sans-serif",
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default withUrqlClient(() => ({
  url: "http://localhost:4000/graphql",
  suspense: true,
  exchanges: [devtoolsExchange, dedupExchange, suspenseExchange, fetchExchange],
}))(App);

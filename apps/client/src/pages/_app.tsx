import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

const theme = extendTheme({
  fonts: {
    heading: "Noto Sans JP, sans-serif",
    body: "Noto Sans JP, sans-serif",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
    </RecoilRoot>
  );
}

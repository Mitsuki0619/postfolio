// pages/_document.js

import { ColorModeScript, theme } from "@chakra-ui/react";
import { createRelayDocument, RelayDocument } from "relay-nextjs/document";
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

interface DocumentProps {
  relayDocument: RelayDocument;
}

const Document = (props: DocumentProps) => {
  const { relayDocument } = props;

  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        />
        <relayDocument.Script />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

Document.getInitialProps = async (ctx: DocumentContext) => {
  const relayDocument = createRelayDocument();

  const renderPage = ctx.renderPage;
  ctx.renderPage = () =>
    renderPage({
      enhanceApp: (App) => relayDocument.enhance(App),
    });

  const initialProps = await NextDocument.getInitialProps(ctx);

  return {
    ...initialProps,
    relayDocument,
  };
};

export default Document;

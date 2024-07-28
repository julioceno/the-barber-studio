import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br" style={{ scrollBehavior:'smooth' }}>
      <Head>
        <title>The Barber Studio</title>
        <link rel="icon" href="/logo.png" />
        <meta name='description' content='The Barber Studio - Barbearia em Itaguaí' />
        <meta property='og:title' content='The Barber Studio' />
        <meta
          property='og:description'
          content='Barbearia em Itaguaí'
        />
        <meta property='og:url' content='https://www.thebarberstudio.com.br/' />
        <meta property='og:type' content='website' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

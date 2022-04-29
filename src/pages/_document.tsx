import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Expires" content="60" />
          <meta
            name="google-site-verification"
            content="JYnLwVdz4iMwKKarFAZ6OlPVpPxe2WH2HFZaUgGTssY"
          />
          <meta
            name="naver-site-verification"
            content="1dbf0456f2da85b6837dea7c801a3fd52b8ad1fe"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Expires" content="60" />
          <meta
            name="google-site-verification"
            content="MHj8EsajJCDmX2D0y0Vk9g95kY8RERlGyhyKkQly0hM"
          />
          <meta
            name="naver-site-verification"
            content="284eaf76f8ae325f1e006963d3a6f79cd64e2b07"
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

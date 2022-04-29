import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { DefaultSeo } from "next-seo";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "ko_KR",
          url: "https://simlimall.netlify.app/",
          site_name: "심리몰",
          images: [
            {
              url: "https://cdn.jsdelivr.net/gh/vangona/simlimall/src/img/logo-row.png",
              width: 173,
              height: 63,
              alt: "",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

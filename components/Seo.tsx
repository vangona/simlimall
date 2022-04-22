import Head from "next/head";

interface SeoInfo {
  title: string;
}

export default function Seo({ title }: SeoInfo) {
  return (
    <Head>
      <title>{title} | 심리몰</title>
    </Head>
  );
}

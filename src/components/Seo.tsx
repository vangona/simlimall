import { NextSeo } from "next-seo";
import Head from "next/head";

interface SeoInfo {
  title: string;
  description: string;
}

export default function Seo({ title, description }: SeoInfo) {
  return (
    <NextSeo
      title={`${title} | 심리몰`}
      description={description}
      canonical="https://simlimall.netlify.app/"
      openGraph={{
        type: "website",
        locale: "ko_KR",
        title,
        description,
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
    />
  );
}

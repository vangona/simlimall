import type { NextPage } from "next";
import AboutHeader from "../../components/about/AboutHeader";
import Seo from "../../components/Seo";

const Promise: NextPage = () => {
  return (
    <>
      <Seo title="심리몰의 약속" />
      <AboutHeader>
        <article>심리몰의 약속</article>
      </AboutHeader>
    </>
  );
};

export default Promise;

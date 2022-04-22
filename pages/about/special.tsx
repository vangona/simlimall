import type { NextPage } from "next";
import AboutHeader from "../../components/about/AboutHeader";
import Seo from "../../components/Seo";

const Special: NextPage = () => {
  return (
    <>
      <Seo title="심리몰이 특별한 이유" />
      <AboutHeader>
        <article>심리몰이 특별한 이유</article>
      </AboutHeader>
    </>
  );
};

export default Special;

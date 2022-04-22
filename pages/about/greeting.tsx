import type { NextPage } from "next";
import AboutHeader from "../../components/about/AboutHeader";
import Seo from "../../components/Seo";

const Greeting: NextPage = () => {
  return (
    <>
      <Seo title="심리몰 인삿말" />
      <AboutHeader>
        <article>심리몰 인삿말</article>
      </AboutHeader>
    </>
  );
};

export default Greeting;

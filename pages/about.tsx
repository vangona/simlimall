import type { NextPage } from "next";
import AboutLayout from "../components/about/AboutHeader";
import AboutHeader from "../components/about/AboutHeader";
import Seo from "../components/Seo";

const About: NextPage = () => {
  return (
    <>
      <Seo title="심리몰이란?" />
      <AboutHeader>
        <article>심리몰이란?</article>
      </AboutHeader>
      <style jsx>{`
        section {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default About;

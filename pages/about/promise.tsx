import type { NextPage } from "next";
import Image from "next/image";
import AboutHeader from "../../components/about/AboutHeader";
import SectionMainLayout from "../../components/section/SectionMainLayout";
import Seo from "../../components/Seo";

const Promise: NextPage = () => {
  return (
    <SectionMainLayout>
      <Seo title="심리몰의 약속" />
      <AboutHeader>
        <article className="header__article header--about">
          <h2>심리몰의 약속</h2>
          <div className="img-wrapper">
            <Image
              src="http://simlimall.com/images/sub/promiseTilteImg.png"
              width={"1803px"}
              height={"650px"}
              layout="responsive"
              objectFit="cover"
              alt=""
            />
          </div>
        </article>
      </AboutHeader>
      <section>
        <article>
          <div className="title">
            <h4>Simlimall VALUE</h4>
            <h5>심리몰의 핵심가치</h5>
          </div>
          <div className="img-wrapper">
            <Image
              src="http://simlimall.com/images/sub/valueImg.png"
              width={"558px"}
              height={"275px"}
              layout="responsive"
              alt=""
            />
          </div>
        </article>
        <article className="article-box">
          <div className="title">
            <h4>Vision</h4>
            <h5>심리학의 대중화와 사회 인식 향상</h5>
          </div>
        </article>
        <article className="article-box">
          <div className="title last-article">
            <h4>Simlimall Mission</h4>
            <h5>심리몰의 미션</h5>
            <span>심리학 기반 도구 및 교육 제작과 개인의 행복증진</span>
          </div>
        </article>
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center;
          gap: 5rem;
        }

        section article {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          gap: 3rem;
        }

        section article:first-child {
          margin: 5rem;
        }

        .title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2rem;
        }

        .title h4 {
          color: #f4b728;
          font-size: 2rem;
          font-weight: 400;
          margin: 0;
        }

        .title h5 {
          font-size: 1.8rem;
          font-weight: 400;
          margin: 0;
        }

        .article-box {
          padding: 5rem 0;
          border: 1px solid rgba(0, 0, 0, 0.1);
          gap: 0;
        }

        section article .img-wrapper {
          max-width: 800px;
        }

        .article-box span {
          font-size: 1.2rem;
        }

        .last-article {
          gap: 10px;
        }

        .last-article h5 {
          margin-bottom: 3rem;
        }
      `}</style>
    </SectionMainLayout>
  );
};

export default Promise;

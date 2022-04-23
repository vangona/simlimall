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
              alt=""
              width={"1803px"}
              height={"650px"}
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
          <div>
            <Image
              src="http://simlimall.com/images/sub/valueImg.png"
              width={"558px"}
              height={"275px"}
              alt=""
            />
          </div>
        </article>
        <article>
          <div className="title">
            <h4>Simlimall VALUE</h4>
            <span>심리학의 대중화와 사회 인식 향상</span>
          </div>
        </article>
        <article>
          <div className="title">
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
        }

        section article {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        section article * {
        }

        section article:not(:first-child) {
          border: 1px solid black;
        }

        .title h4 {
          color: #f4b728;
        }
      `}</style>
    </SectionMainLayout>
  );
};

export default Promise;

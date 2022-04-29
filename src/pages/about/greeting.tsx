import type { NextPage } from "next";
import Image from "next/image";
import AboutHeader from "../../components/about/AboutHeader";
import SectionMainLayout from "../../components/section/SectionMainLayout";
import Seo from "../../components/Seo";

const Greeting: NextPage = () => {
  return (
    <SectionMainLayout>
      <Seo title="심리몰 인삿말" />
      <AboutHeader>
        <article className="header__article header--about">
          <h2>심리몰 인삿말</h2>
        </article>
      </AboutHeader>
      <article className="about-main__article">
        <div className="description">
          <div>
            <p>
              Simlimall은 단순히 도구를 만드는 곳이 아니라 생각과 가치를
              실현하여 긍정적인 사회와 개인의 행복을 제공하기 위해 노력하고
              있습니다.
            </p>
          </div>
          <div>
            Simrimall에서 제공되는 모든 서비스의 중심에는 사람이 있습니다.
            사람의 행복과 더 나은 삶을 위해 노력하는 회사가 될 것을
            약속드립니다. <br />
            Simlimall은 심리학 전문가들과 함께 합니다.
            <br />
            과학적이고 전문적인 지식, 윤리적 기준, 현장의 전문적 인 경험을
            바탕으로 신뢰할 수 있는 학문적인 서비스를 제공하겠습니다.
          </div>
          <div>
            <p>
              늘 처음과 같이 여러분과 함께 성장하는 Simlimall이 되겠습니다.
              감사합니다.
            </p>
          </div>
        </div>
        <div className="img-wrapper">
          <div className="img-upper">
            <span>심리몰 임직원 일동.</span>
            <div className="line--portrait"></div>
          </div>
          <Image
            src="about/greetingTitleImg.png"
            alt=""
            width={"1803px"}
            height={"650px"}
          />
        </div>
      </article>
      <style jsx>{`
        .description {
          padding: 30px 0;
        }

        .description div {
          font-size: 1.1rem;
          word-break: keep-all;
          line-height: 160%;
        }

        .img-wrapper {
          margin-top: 2rem;
          position: relative;
        }

        .img-upper {
          display: flex;
          position: absolute;
          top: -2rem;
          right: 2rem;
          gap: 2rem;
          font-size: 1.2rem;
          z-index: 9;
        }

        .line--portrait {
          width: 0.5rem;
          height: 8rem;
          background-color: #f1ba27;
          transform: translateY(-2rem);
        }
      `}</style>
    </SectionMainLayout>
  );
};

export default Greeting;

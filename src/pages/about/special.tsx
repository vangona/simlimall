import type { NextPage } from "next";
import Image from "next/image";
import AboutHeader from "../../components/about/AboutHeader";
import SectionMainLayout from "../../components/section/SectionMainLayout";
import Seo from "../../components/Seo";

const Special: NextPage = () => {
  return (
    <SectionMainLayout>
      <Seo
        title="심리몰이 특별한 이유"
        description="Simlimall은 심리학을 기반으로 사회와 개인의 삶을 지원하는데 전념하고 있습니다. 우리의 필요와 아이디어를 현실에서 만나보세요."
      />
      <AboutHeader>
        <article className="header__article header--about">
          <h2>심리몰이 특별한 이유</h2>
          <div className="header__hero">
            <div className="hero-description">
              <div className="hero-line"></div>
              <h3>Simlimall Special</h3>
              <div>
                Simlimall은 심리학을 기반으로 사회와 개인의 삶을 지원하는데
                전념하고 있습니다. 우리의 필요와 아이디어를 현실에서 만나보세요.
              </div>
              <p>
                밝은 내일과 긍정적인 미래를 위해 여러분의 필요에 귀 기울이고
                여러분의 능력과 노력을 충분히 발휘할 수 있도록 지원하여 아름다운
                사회의 개인의 행복을 만들어갑니다.
              </p>
              <div className="hero-line"></div>
            </div>
            <div className="linebox"></div>
            <div className="img-wrapper">
              <Image
                src="about/specialTitleImg.jpg"
                alt=""
                width={"1803px"}
                height={"650px"}
                layout="responsive"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </article>
      </AboutHeader>
      <article className="section-article">
        <div className="article-row">
          <Image
            src="about/specialThum01.jpg"
            width={"558px"}
            height={"369px"}
            alt=""
            priority
          />
          <div className="article-description">
            <div className="number--big">01</div>
            <div className="article-line"></div>
            <h3>우리는 여러분의 노력을 믿습니다.</h3>
            <p>
              우리는 심리학을 통해 사회와 개인의 행복을 위해 노력합니다. 우리는
              여러분들이 만드는 아름다운 노력이 의미있고 긍정적인 변화를
              만들어낸다고 믿습니다.
            </p>
          </div>
        </div>
        <div className="article-row">
          <Image
            src="about/specialThum02.jpg"
            width={"558px"}
            height={"369px"}
            alt=""
            priority
          />
          <div className="article-description">
            <div className="number--big">02</div>
            <div className="article-line"></div>
            <h3>우리는 현장에서 해답을 얻습니다.</h3>
            <p>
              우리는 현장어서 필요한 것이 무엇인지 탐구합니다. 현장의 상황과
              목소리를 고려한 도구와 교육을 개발하고 제공합니다.
            </p>
          </div>
        </div>
        <div className="article-row">
          <Image
            src="about/specialThum03.png"
            width={"558px"}
            height={"369px"}
            alt=""
            priority
          />
          <div className="article-description">
            <div className="number--big">03</div>
            <div className="article-line"></div>
            <h3>우리는 가치와 생각을 실현합니다.</h3>
            <p>
              우리는 가치와 생각으로 머무르기보다. 이를 실현하기 위해 고민하고,
              움직이고, 해결합니다.
            </p>
          </div>
        </div>
      </article>
      <style jsx>{`
        .section-article {
          margin-top: 3rem;
          display: grid;
          grid-template-rows: repeat(3, 1fr);
        }

        .section-article .article-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .section-article div:nth-child(even) div {
          order: -1;
        }

        .section-article .article-description {
          display: flex;
          position: relative;
          flex-direction: column;
          justify-content: center;
          padding: 2rem 3rem;
          max-width: 500px;
        }

        .number--big {
          top: 1rem;
          right: 1rem;
          position: absolute;
          font-family: montserrat;
          font-weight: bolder;
          font-size: 72px;
          color: rgb(247, 247, 247);
        }

        .article-line {
          height: 2.5px;
          width: 50px;
          background-color: black;
        }

        .article-description h3 {
          font-size: 1.5rem;
          font-weight: 400;
        }

        .article-description p {
          font-size: 1rem;
          font-weight: 300;
          line-height: 140%;
          word-break: keep-all;
        }

        @media (max-width: 768px) {
          .section-article .article-row {
            display: flex;
            flex-direction: column;
          }

          .section-article div:nth-child(odd) div {
            order: -1;
          }
        }

        @media (max-width: 1200px) {
          .number--big {
            display: none;
          }
        }
      `}</style>
    </SectionMainLayout>
  );
};

export default Special;

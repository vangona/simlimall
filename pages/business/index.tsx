import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeaderLayout from "../../components/section/SectionHeaderLayout";
import SectionMainLayout from "../../components/section/SectionMainLayout";
import Seo from "../../components/Seo";

const Business: NextPage = () => {
  return (
    <SectionMainLayout>
      <Seo title="사업 소개" />
      <SectionHeaderLayout>
        <article className="header__article">
          <h2>사업 소개</h2>
          <div className="header__hero">
            <div className="hero-description">
              <div className="hero-line"></div>
              <h3>Simlimall Business</h3>
              <div>심리몰을 만나고 &#39;가치&#39;를 배웠습니다.</div>
              <p>고객님이 항상 성장할 수 있는 그 날까지 정성을 다하겠습니다.</p>
              <div className="hero-line"></div>
            </div>
            <div className="linebox"></div>
            <div className="img-wrapper">
              <Image
                src="http://simlimall.com/images/sub/specialTilteImg.jpg"
                alt=""
                width={"1803px"}
                height={"650px"}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        </article>
      </SectionHeaderLayout>
      <article className="business-main__article">
        <div className="article-main">
          <div className="article-column">
            <div className="number-box">01</div>
            <div className="line"></div>
            <h3>연구 및 개발</h3>
            <span>생각을 창조(create) 합니다.</span>
          </div>
          <div className="article-column">
            <div className="number-box">02</div>
            <div className="line"></div>
            <h3>제작</h3>
            <span>생각을 제작(produce) 합니다.</span>
          </div>
          <div className="article-column">
            <div className="number-box">03</div>
            <div className="line"></div>
            <h3>상담 및 교육</h3>
            <span>생각을 제공(service) 합니다.</span>
          </div>
        </div>

        <Link href="/business/detail">
          <a className="action-btn">더 알아보기</a>
        </Link>
      </article>
      <style jsx>{`
        h2 {
          margin: 0 0 2.5rem 0;
        }

        .business-main__article {
          display: flex;
          flex-direction: column;
          gap: 50px;
          align-items: center;

          width: 100%;
          height: 100%;
          margin-top: 3rem;
          padding: 3rem;

          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .article-main {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
        }

        .article-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 200px;
        }

        .article-column:not(:last-child) {
          padding-right: 2rem;
          border-right: 1px solid rgba(0, 0, 0, 0.1);
        }

        .article-column h3 {
          margin: 2.5rem;
          font-weight: 400;
        }

        .article-column span {
          font-weight: 300;
        }

        .line {
          margin-top: 10px;
          background-color: black;
          height: 2px;
          width: 25px;
        }

        @media screen and (max-width: 1024px) {
          .article-main {
            flex-direction: column;
          }

          .article-column:not(:last-child) {
            padding: 0 0 2rem 0;
            border-right: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>
    </SectionMainLayout>
  );
};

export default Business;

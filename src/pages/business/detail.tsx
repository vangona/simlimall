import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHero from "../../components/section/SectionHero";
import SectionMainLayout from "../../components/section/SectionMainLayout";
import Seo from "../../components/Seo";

const Detail: NextPage = () => {
  return (
    <SectionMainLayout>
      <Seo
        title="심리몰 연구 및 개발"
        description="심리몰은 최선을 다합니다."
      />
      <SectionHero>
        <div className="hero">
          <h3>Simlimall Business</h3>
          <h4>심리몰 연구 및 개발</h4>
          <div className="hero-line"></div>
          <span>인생의 모든 순간이 특별해지는 심리적 성장</span>
        </div>
      </SectionHero>
      <article className="business-detail__article">
        <h4>SIMLIMALL BUSINESS</h4>
        <h2>심리몰 연구 및 개발의 3가지 STEP</h2>
        <Image
          src="business/stepImg.png"
          width={"641px"}
          height={"631px"}
          alt=""
        />
        <hr />
        <div className="table">
          <div className="table-row">
            <div className="table-column">
              <h5 className="step">Step01</h5>
              <h5>연구 및 개발</h5>
            </div>
            <div className="table-column">
              <h5>
                생각을 <span className="bold">창조(create)</span> 하다.
              </h5>
              <span>- 심리학을 기반으로 한 연구와 개발</span>
              <span>- 심리학 전문가 컨설팅을 통한 전문성 강화</span>
              <span>- 심리 및 교육 현장과의 소통을 통한 실용성 강화</span>
            </div>
          </div>
          <div className="table-row">
            <div className="table-column">
              <h5 className="step">Step02</h5>
              <h5>제작</h5>
            </div>
            <div className="table-column">
              <h5>
                생각을 <span className="bold">제작(produce)</span> 하다.
              </h5>
              <span>- 개발된 심리도구 제작</span>
              <span>- 개발된 심리 교육 및 프로그램 교본 제작</span>
              <span>
                - 교육/상담/정부/공공기관/기업 등 심리적 문제를 해결하기 위한
                심리도구 및 교육/상담 프로그램 보급
              </span>
            </div>
          </div>
          <div className="table-row">
            <div className="table-column">
              <h5 className="step">Step03</h5>
              <h5>상담 및 교육</h5>
            </div>
            <div className="table-column">
              <h5>
                생각을 <span className="bold">제공(service)</span> 하다.
              </h5>
              <span>- 제작된 심리 도구 워크숍 제공</span>
              <span>- 제작된 심리 교육 및 프로그램 워크숍 제공</span>
              <span>- 개발된 심리 도구 및 프로그램을 통한 심리상담 제공</span>
            </div>
          </div>
        </div>
      </article>
      <article className="business-detail__article">
        <h4>SIMLIMALL BUSINESS</h4>
        <h2>심리몰 연구 및 개발의 장점</h2>
        <div className="box-container">
          <div className="merit-description">
            <div className="icon">
              <Image
                src="business/bjIco01.png"
                alt=""
                width={"47px"}
                height={"43px"}
              />
            </div>
            <h5>01</h5>
            <div className="line"></div>
            <p>심리상담 및 교육 현장과의 소통을 통한 실용적인 심리도구 개발</p>
          </div>
          <div className="merit-description">
            <div className="icon">
              <Image
                src="business/bjIco02.png"
                alt=""
                width={"47px"}
                height={"43px"}
              />
            </div>
            <h5>02</h5>
            <div className="line"></div>
            <p>심리전문가의 컨설팅을 통한 전문적인 심리도구 개발</p>
          </div>
          <div className="merit-description">
            <div className="icon">
              <Image
                src="business/bjIco03.png"
                alt=""
                width={"47px"}
                height={"43px"}
              />
            </div>
            <h5>02</h5>
            <div className="line"></div>
            <p>워크숍을 통한 효율적인 심리도구 활용 가이드 제시</p>
          </div>
        </div>
      </article>
      <Link href="#">
        <a className="purchase-btn">상품으로 이동하기</a>
      </Link>
      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          color: white;
          transition: 0.1s all linear;

          justify-content: center;
          align-items: center;

          width: 100%;
          height: 60vmax;
          max-height: 90vh;
          background-position: center;
          background-size: cover;
          background-image: url("https://cdn.jsdelivr.net/gh/vangona/simlimall/src/img/business/businessDetailTitle.jpg");
        }

        .hero h3 {
          font-size: 2rem;
        }

        .hero h4 {
          font-size: 1.5rem;
          margin: 0;
        }

        .hero span {
          font-size: 1.2rem;
        }

        .hero .hero-line {
          width: 100px;
          height: 1px;
          background-color: white;
          margin: 2.5rem;
        }

        .business-detail__article {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 100px 0;
          gap: 20px;
        }

        hr {
          width: 100%;
        }

        .table {
          display: grid;
          grid-template-rows: repeat(3, 1fr);
          font-weight: 300;
          line-height: 140%;
        }

        .table-row {
          display: grid;
          grid-template-columns: 1fr 4fr;
        }

        .table-column {
          display: flex;
          flex-direction: column;
          padding: 1rem 2rem;
          justify-content: center;
        }

        .table-column:first-child {
          align-items: center;
        }

        .table-column h5 {
          font-size: 1.1rem;
          font-weight: 400;
          margin: 0;
          margin-bottom: 1rem;
        }

        .table-column .step {
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.8);
        }

        .table-column span {
          font-size: 1.1rem;
          margin-bottom: 5px;
        }

        .table-row {
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }

        .box-container {
          display: flex;
          gap: 20px;
        }

        .merit-description {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 3rem;
          width: 30vw;
          max-width: 300px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .merit-description h5 {
          font-size: 1.2rem;
          font-weight: 400;
          margin: 1rem 0 5px 0;
        }

        .merit-description .line {
          width: 1.5rem;
          height: 1px;
          background-color: black;
        }

        .merit-description p {
          text-align: center;
          word-break: keep-all;
          font-size: 0.9rem;
          font-weight: 300;
        }

        .bold {
          font-weight: 700;
        }

        .purchase-btn {
          text-align: center;
          width: 200px;
          padding: 15px 20px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          transition: 0.1s all linear;
          background-color: #f4b728;
          color: white;
        }

        .purchase-btn:hover {
          cursor: pointer;
          transform: scale(1.05);
        }

        @media screen and (max-width: 768px) {
          .table-row {
            grid-template-columns: none;
            text-align: center;
          }

          .business-detail__article {
            width: 100%;
          }

          .box-container {
            flex-direction: column;
            width: 100%;
          }

          .merit-description {
            width: 100%;
            max-width: none;
          }
        }

        @media screen and (max-width: 1024px) {
          .business-detail__article {
            margin-top: 0;
          }
        }
      `}</style>
    </SectionMainLayout>
  );
};

export default Detail;

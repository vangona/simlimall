import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHero from "../../components/section/SectionHero";
import SectionMainLayout from "../../components/section/SectionMainLayout";

const Detail: NextPage = () => {
  return (
    <SectionMainLayout>
      <SectionHero>
        <div className="hero">
          <h3>Simlimall Business</h3>
          <h4>심리몰 연구 및 개발</h4>
          <div className="line"></div>
          <span>인생의 모든 순간이 특별해지는 아름다운 변화</span>
        </div>
      </SectionHero>
      <article className="business-detail__article">
        <h4>SIMLIMALL BUSINESS</h4>
        <h2>심리몰 연구 및 개발의 3가지 STEP</h2>
        <Image
          src="http://simlimall.com/images/sub/stepImg.png"
          width={"641px"}
          height={"631px"}
          alt=""
        />
        <hr />
        <div className="table">
          <div className="table-row">
            <div className="table-column">
              <h5>Step01</h5>
              <h5>연구 및 개발</h5>
            </div>
            <div className="table-column">
              <h5>생각을 창조(create) 하다.</h5>
              <span>- 심리학을 기반으로 한 연구와 개발</span>
              <span>- 심리학 전문가 컨설팅을 통한 전문성 강화</span>
              <span>- 심리 및 교육 현장과의 소통을 통한 실용성 강화</span>
            </div>
          </div>
          <div className="table-row">
            <div className="table-column">
              <h5>Step02</h5>
              <h5>제작</h5>
            </div>
            <div className="table-column">
              <h5>생각을 제작(produce) 하다.</h5>
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
              <h5>Step03</h5>
              <h5>상담 및 교육</h5>
            </div>
            <div className="table-column">
              <h5>생각을 제공(service) 하다.</h5>
              <span>- 제작된 심리 도구 워크숍 제공</span>
              <span>- 제작된 심리 교육 및 프로그램 워크숍 제공</span>
              <span>- 개발된 심리 도구 및 프로그램을 통한 심리상담 제공</span>
            </div>
          </div>
        </div>
        <hr />
      </article>
      <article className="business-detail__article">
        <h4>SIMLIMALL BUSINESS</h4>
        <h2>심리몰 연구 및 개발의 장점</h2>
        <div className="box-container">
          <div className="merit-description">
            <div className="icon"></div>
            <h5>01</h5>
            <div className="line"></div>
            <p>심리상담 및 교육 현장과의 소통을 통한 실용적인 심리도구 개발</p>
          </div>
          <div className="merit-description">
            <div className="icon"></div>
            <h5>02</h5>
            <div className="line"></div>
            <p>심리전문가의 컨설팅을 통한 전문적인 심리도구 개발</p>
          </div>
          <div className="merit-description">
            <div className="icon"></div>
            <h5>02</h5>
            <div className="line"></div>
            <p>워크숍을 통한 효율적인 심리도구 활용 가이드 제시</p>
          </div>
        </div>
      </article>
      <Link href="#">
        <a className="action-btn">상품 구매하기</a>
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
          background-image: url("http://simlimall.com/images/sub/businessTitle.jpg");
        }

        .hero:hover {
          color: rgba(255, 255, 255, 0.8);
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

        .hero .line {
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
          margin-bottom: 50px;
          gap: 20px;
        }

        .table {
          display: grid;
          grid-template-rows: repeat(3, 1fr);
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

        .table-column h5 {
          font-size: 1.1rem;
          margin: 0;
          margin-bottom: 1rem;
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
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .merit-description h5 {
          font-size: 1.2rem;
          font-weight: 400;
          margin-bottom: 5px;
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
        }
      `}</style>
    </SectionMainLayout>
  );
};

export default Detail;

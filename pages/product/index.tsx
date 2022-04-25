import type { NextPage } from "next";
import Image from "next/image";
import SectionHeaderLayout from "../../components/section/SectionHeaderLayout";
import SectionMainLayout from "../../components/section/SectionMainLayout";
import Seo from "../../components/Seo";

const Product: NextPage = () => {
  return (
    <SectionMainLayout>
      <Seo title="제품 소개" />
      <SectionHeaderLayout>
        <article className="header__article">
          <h2>제품 소개</h2>
          <div className="header__hero">
            <div className="hero-description">
              <div className="hero-line"></div>
              <h3>Simlimall Product</h3>
              <div>심리몰을 만나고 '행복'을 배웠습니다.</div>
              <p>고객님이 항상 웃을 수 있는 그 날까지 정성을 다하겠습니다.</p>
              <div className="hero-line"></div>
            </div>
            <div className="linebox"></div>
            <div className="img-wrapper">
              <Image
                src="http://simlimall.com/images/sub/productTilteImg.jpg"
                width={"1803px"}
                height={"650px"}
                layout="responsive"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
        </article>
      </SectionHeaderLayout>
      <article className="product-article">
        <div className="article-row">
          <div className="img-wrapper">
            <Image
              src="http://simlimall.com/images/sub/proThum01.jpg"
              alt=""
              width={"590px"}
              height={"380px"}
            />{" "}
          </div>
          <div className="article-description">
            <h3>수용전념치료 그림도구</h3>
            <span>50,000원</span>
            <p>
              수용전념치료(ACT)는 전 세계적으로 사용되는 효과적인
              심리치료입니다. ACT의 개념은 다소 추상적으로 느껴지며 어렵다고
              생각하기도 합니다. 수용전념치료 그림도구는 이미지를 통해 쉽고
              맥락적으로 수용전념치료를 이해하고 사용할 수 있도록 도울 수
              있습니다.
            </p>
          </div>
        </div>
        <div className="article-row">
          <div className="img-wrapper">
            <Image
              src="http://simlimall.com/images/sub/proThum02.jpg"
              alt=""
              width={"590px"}
              height={"380px"}
            />
          </div>
          <div className="article-description">
            <h3>수용전념치료 그림도구</h3>
            <p>
              수용전념치료 그림도구는 심리적 유연성을 증진시키지 위한 6가지
              핵심과정을 담은 심리도구입니다. 수용, 탈융합, 현재에 존재하기,
              맥락적 자기, 가치, 전념행동을 돕기 위한 비유를 그림을 통해 경험할
              수 있습니다.
            </p>
          </div>
        </div>
        <div className="article-row">
          <div className="img-wrapper">
            <Image
              src="http://simlimall.com/images/sub/proThum03.jpg"
              alt=""
              width={"590px"}
              height={"380px"}
            />{" "}
          </div>
          <div className="article-description">
            <h3>마음갤러리</h3>
            <span>30,000원</span>
            <p>
              마음갤러리는 사진을 통해 상담, 교육, 및 다양한 장면에서 활용을
              도울 수 있는 도구입니다. 사진은 비교적 명확한 대상을 보여주지만,
              그 대상을 통해 떠올리게 되는 내면의 심상이나 기억은 사람마다
              다르기 때문에 같은 장면을 보고도 사진의 다양한 이야기들을 찾아내고
              이야기 할 수 있게 됩니다.
            </p>
          </div>
        </div>
        <div className="article-row">
          <div className="img-wrapper">
            <Image
              src="http://simlimall.com/images/sub/proThum05.jpg"
              alt=""
              width={"590px"}
              height={"380px"}
            />{" "}
          </div>
          <div className="article-description">
            <h3>마음갤러리</h3>
            <p>
              마음갤러리 사진의 앞면은 사진으로 구성되어 있고, 뒷면에는 다양한
              기호로 구성되어 있습니다. 이러한 구성은 집단구성을 나누거나 순서를
              정하는 등 집단활동을 할 때 유용하게 사용될 수 있습니다
            </p>
          </div>
        </div>
      </article>
      <style jsx>{`
        .product-article {
          max-width: 1000px;
          margin-top: 50px;
          display: grid;
          grid-template-rows: repeat(3, 1fr);
        }

        .product-article .img-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .article-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .article-row:nth-child(even) .article-description {
          order: -1;
        }

        .article-description {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem 3rem;
          word-break: keep-all;
        }

        .article-description h3 {
          margin: 0 0 5px 0;
        }

        .article-description p {
          font-size: 1rem;
          font-weight: 200;
          line-height: 140%;
        }

        @media (max-width: 768px) {
          .article-row {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .article-description {
            min-height: 250px;
            order: -1;
            padding: 3rem;
          }
        }
      `}</style>
    </SectionMainLayout>
  );
};

export default Product;

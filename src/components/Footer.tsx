import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faN } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="top">COPYRIGHT (C) SIMLIMALL. ALL RIGHT RESERVED</div>
      <div className="bottom">
        <div className="bottom-left">
          <Image
            src="logo-column.png"
            width={"80px"}
            height={"70px"}
            alt=""
            priority
          />
          <div className="description">
            <span>사업자번호 : 436-73-00329 / 대표 : 임소희</span>
            <span>대표전화 : 010-4196-0090</span>
          </div>
        </div>
        <div className="bottom-center"></div>
        <div className="bottom-right">
          <div className="bottom-sns">
            <h5>sns</h5>
            <div>
              <a href="https://www.facebook.com/socreate.kr">
                <FontAwesomeIcon icon={faFacebookSquare} />
                <span>페이스북</span>
              </a>
              <a href="https://www.instagram.com/simlimall/">
                <FontAwesomeIcon icon={faInstagram} />
                <span>인스타그램</span>
              </a>
            </div>
          </div>
          <div className="bottom-store">
            <h5>store</h5>
            <a href="https://smartstore.naver.com/simlimall">
              <FontAwesomeIcon icon={faN} />
              <span>네이버스토어팜</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer {
          width: 100%;
          bottom: 0;

          display: flex;
          flex-direction: column;
          align-items: center;

          font-size: 0.8rem;
          padding: 0 5vw;
        }

        footer > div {
          display: flex;
          align-items: center;
        }

        .top {
          width: 95vw;
          height: 50px;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          justify-content: center;
          color: rgba(0, 0, 0, 0.3);
        }

        .bottom {
          height: 100%;
          width: 100%;
          max-width: 1000px;
          justify-content: flex-start;
          gap: 5vw;
          padding: 1rem 0;
        }

        .bottom-center {
          width: 1px;
          min-height: 150px;
          background-color: rgba(0, 0, 0, 0.1);
        }

        .bottom-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .bottom-left .description {
          display: flex;
          flex-direction: column;
          margin-top: 10px;
          gap: 5px;
        }

        .bottom-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .bottom-right h5 {
          text-transform: uppercase;
          margin: 0 0 10px 0;
          color: #f4b728;
        }

        .bottom-sns div {
          display: flex;
          gap: 10px;
        }

        .bottom-right a {
          display: flex;
          margin-bottom: 5px;
          align-items: center;
          gap: 5px;
        }

        @media screen and (max-width: 768px) {
          footer .bottom {
            flex-direction: column;
          }

          .bottom-left {
            flex-direction: row;
            align-items: center;
            gap: 10px;s
          }

          .bottom-center {
            width: 100%;
            min-height: 1px;
            background-color: rgba(0, 0, 0, 0.1);
          }

          .bottom-right {
            flex-direction: row;
          }
        }
      `}</style>
    </footer>
  );
}

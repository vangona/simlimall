import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NavBar() {
  const [menuState, setMenuState] = useState<boolean>(false);

  const router = useRouter();
  const onClickMenuToggle = () => {
    const body = document.body;
    const menuContent = document.querySelector(".menu--mobile__content");

    if (menuState) {
      menuContent?.classList.add("close");
      setTimeout(() => {
        body.style.overflow = "auto";
        setMenuState(!menuState);
      }, 300);
    } else {
      body.style.overflow = "hidden";
      menuContent?.classList.remove("close");
      setMenuState(!menuState);
    }
  };

  return (
    <header>
      <nav className="menu">
        <div className="menu-section menu-section--left">
          <div className="menu-logo">
            <Link href="/">
              <a>
                <Image
                  src="logo-row.png"
                  width={"140px"}
                  height={"50px"}
                  quality={"100"}
                  alt=""
                  priority
                />
              </a>
            </Link>
          </div>

          <div className="menu-content menu-content--nav">
            <Link href="/about/greeting">
              <a className={router.pathname.includes("/about") ? "active" : ""}>
                심리몰이란?
              </a>
            </Link>
            <Link href="/business">
              <a
                className={
                  router.pathname.includes("/business") ? "active" : ""
                }
              >
                사업소개
              </a>
            </Link>
            <Link href="/product">
              <a
                className={router.pathname.includes("/product") ? "active" : ""}
              >
                제품소개
              </a>
            </Link>
          </div>
        </div>

        <div className="menu-content menu-content--purchase">
          <Link href="#">
            <a>구매하기</a>
          </Link>
        </div>

        {menuState ? (
          <div className="menu--mobile">
            <div
              onClick={onClickMenuToggle}
              className="menu--mobile__dimmer"
            ></div>
            <div className="menu--mobile__content">
              <button
                onClick={onClickMenuToggle}
                className="menu--mobile-toggle"
              >
                <FontAwesomeIcon icon={faX} />
              </button>
              <div className="menu-content--subcontent">
                <Link href="/">
                  <a className={router.pathname === "/" ? "active" : ""}>
                    심리몰이란?
                  </a>
                </Link>
                <div className="subcontent__content">
                  <Link href="/about/greeting">
                    <a
                      className={
                        router.pathname.includes("/about") ? "active" : ""
                      }
                    >
                      심리몰 인삿말
                    </a>
                  </Link>
                  <Link href="/about/promise">
                    <a
                      className={
                        router.pathname.includes("/about") ? "active" : ""
                      }
                    >
                      심리몰의 약속
                    </a>
                  </Link>
                  <Link href="/about/special">
                    <a
                      className={
                        router.pathname.includes("/about") ? "active" : ""
                      }
                    >
                      심리몰이 특별한 이유
                    </a>
                  </Link>
                </div>
              </div>
              <div className="menu-content--subcontent">
                <Link href="/business">
                  <a
                    className={
                      router.pathname.includes("/business") ? "active" : ""
                    }
                  >
                    사업소개
                  </a>
                </Link>
              </div>
              <div className="menu-content--subcontent">
                <Link href="/product">
                  <a
                    className={
                      router.pathname.includes("/product") ? "active" : ""
                    }
                  >
                    제품소개
                  </a>
                </Link>
              </div>
              <div className="menu-content menu-content--purchase">
                <Link href="#">
                  <a>구매하기</a>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={onClickMenuToggle} className="menu--mobile-toggle">
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
      </nav>
      <style jsx>{`
        .link {
          text-decoration: none;
        }

        header {
          display: flex;
          position: fixed;
          top: 0;
          background-color: white;
          z-index: 99;
          width: 100%;
          height: 100px;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          padding: 0 5vw;
        }

        nav {
          width: 100%;
          max-width: 1000px;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        nav a {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 18px;
        }

        .menu-logo {
          height: 80%;
          margin-right: 2rem;
        }

        .menu-section--left {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
        }

        .menu-content--nav {
          display: flex;
          gap: 2rem;
        }

        .active {
          color: #f4b728;
        }

        .menu-content--purchase {
          display: flex;
          width: 150px;
          height: 50px;
          background-color: #f4b728;
          color: white;
          border-radius: 5px;
          transition: 0.1s all linear;
        }

        .menu-content--purchase:hover {
          cursor: pointer;
          transform: scale(1.05);
        }

        .menu-content--purchase a {
          width: 100%;
          height: 100%;
        }

        .menu--mobile-toggle {
          display: none;
          font-size: 2rem;
          background-color: transparent;
          border: none;
          transition: 0.1s all linear;
        }

        .menu--mobile-toggle:hover {
          cursor: pointer;
          transform: scale(1.05);
        }

        .menu--mobile {
          position: fixed;
          top: 0;
          right: 0;
          width: 300px;
          height: 100vh;
          width: 95vw;
          height: 100vh;
          z-index: 3;
        }

        .menu--mobile__dimmer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          z-index: 4;
        }

        @keyframes menuSlideIn {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-300px);
          }
        }

        @keyframes menuSlideOut {
          from {
            transform: translateX(-300px);
          }

          to {
            transform: translateX(0);
          }
        }

        .menu--mobile__content {
          display: flex;
          flex-direction: column;
          gap: 50px;
          align-items: flex-start;
          padding: 10px 30px;

          position: absolute;
          top: 0;
          right: -300px;
          width: 300px;
          height: 100vh;

          font-size: 1rem;
          font-weight: 300;
          background-color: white;
          z-index: 5;

          animation: menuSlideIn 0.3s ease-in-out forwards;
        }

        .menu--mobile__content a {
          font-size: 1rem;
          font-weight: 300;
          padding-bottom: 5px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          transition: 0.3s all linear;
        }

        .menu--mobile__content a:hover {
          transform: scale(1.03);
        }

        .menu--mobile button {
          font-size: 15px;
          position: relative;
          top: 15px;
          right: -230px;
        }

        .close {
          animation: menuSlideOut 0.3s ease-in-out forwards;
        }

        .menu-content--subcontent {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          align-items: flex-start;
          font-size: 1.2rem;
          font-weight: 400;
        }

        .menu-content--subcontent > a {
          font-size: 1.2rem;
          font-weight: 400;
        }

        .subcontent__content {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          align-items: flex-end;
          margin-top: 30px;
        }

        .menu--mobile .menu-content--purchase {
          display: flex;
          position: absolute;
          bottom: 15px;
          right: 15px;
          width: 120px;
        }

        @media (max-width: 768px) {
          header {
            height: 80px;
          }

          .menu-section--left {
            height: 100%;
          }

          .menu-section--left * {
            height: 100%;
          }

          .menu--mobile-toggle {
            display: flex;
          }

          .menu-content {
            display: none;
          }

          .active {
            all: unset;
          }

          .active:hover {
            cursor: pointer;
          }
        }
      `}</style>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <header>
      <nav className="menu">
        <div className="menu-section menu-section--left">
          <div className="menu-logo">
            <Link href="/">
              <a>
                <Image
                  src="http://simlimall.com/images/logo.png"
                  width={"180px"}
                  height={"70px"}
                  quality={"100"}
                  alt=""
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
        <button className="menu--mobile-toggle">메뉴</button>
      </nav>
      <style jsx>{`
        .link {
          text-decoration: none;
        }

        header {
          display: flex;
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

        .menu--mobile-toggle {
          display: none;
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

        @media (max-width: 800px) {
          .menu--mobile-toggle {
            display: flex;
          }

          .menu-content {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}

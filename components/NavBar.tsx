import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <header>
      <nav>
        <div className="menu">
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>
              <Image
                src="http://simlimall.com/images/logo.png"
                width={"180px"}
                height={"70px"}
                alt=""
              />
            </a>
          </Link>
          <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>
              심리몰이란?
            </a>
          </Link>
          <Link href="/business">
            <a className={router.pathname === "/business" ? "active" : ""}>
              사업소개
            </a>
          </Link>
          <Link href="/product">
            <a className={router.pathname === "/product" ? "active" : ""}>
              제품소개
            </a>
          </Link>
        </div>
        <div className="purchase">
          <Link href="#">
            <a>제품 구매하기</a>
          </Link>
        </div>
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
        }

        nav {
          min-width: 80%;
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

        .active {
          color: tomato;
        }

        nav div {
          display: flex;
          justify-content: center;
        }

        nav .menu {
          width: 60%;
          max-width: 600px;
          justify-content: space-between;
        }

        .menu .img {
          max-width: 100px;
          margin-bottom: 5px;
        }
      `}</style>
    </header>
  );
}

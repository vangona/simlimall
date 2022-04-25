import Link from "next/link";
import { useRouter } from "next/router";

export default function AboutNav() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/about/greeting">
        <a className={router.pathname === "/about/greeting" ? "active" : ""}>
          심리몰 인사말
        </a>
      </Link>
      <Link href="/about/promise">
        <a className={router.pathname === "/about/promise" ? "active" : ""}>
          심리몰의 약속
        </a>
      </Link>
      <Link href="/about/special">
        <a className={router.pathname === "/about/special" ? "active" : ""}>
          심리몰이 특별한 이유
        </a>
      </Link>
      <style jsx>{`
        nav {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 1.1rem;
          margin-bottom: 10px;
        }

        .active {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}

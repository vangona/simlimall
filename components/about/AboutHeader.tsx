import React from "react";
import AboutNav from "./AboutNav";

interface DefaultLayout {
  children: React.ReactNode;
}

export default function AboutHeader({ children }: DefaultLayout) {
  return (
    <>
      <header>
        <AboutNav />
        {children}
      </header>
      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          background-color: #f7f7f7;
          height: auto;

          padding-top: 50px;
        }
      `}</style>
    </>
  );
}

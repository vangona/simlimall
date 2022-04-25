import React from "react";

interface DefaultLayout {
  children: React.ReactNode;
}

export default function SectionHeaderLayout({ children }: DefaultLayout) {
  return (
    <>
      <header>{children}</header>
      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 95vw;
          background-color: #f7f7f7;
          height: auto;

          padding-top: 2.5rem;
        }
      `}</style>
    </>
  );
}

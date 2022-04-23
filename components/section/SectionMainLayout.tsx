import React from "react";

interface DefaultLayout {
  children: React.ReactNode;
}

export default function SectionMainLayout({ children }: DefaultLayout) {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 5vw;
          margin-bottom: 10vmin;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
}

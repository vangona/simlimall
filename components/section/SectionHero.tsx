import React from "react";

interface SectionHero {
  children: React.ReactNode;
}

export default function SectionHero({ children }: SectionHero) {
  return (
    <header>
      {children}
      <style jsx>{`
        header {
          width: 100vw;
          height: 80vh;
        }
      `}</style>
    </header>
  );
}

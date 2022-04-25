import React from "react";
import SectionHeaderLayout from "../section/SectionHeaderLayout";
import AboutNav from "./AboutNav";

interface DefaultLayout {
  children: React.ReactNode;
}

export default function AboutHeader({ children }: DefaultLayout) {
  return (
    <>
      <SectionHeaderLayout>
        <AboutNav />
        {children}
      </SectionHeaderLayout>
    </>
  );
}

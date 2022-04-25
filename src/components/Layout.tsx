import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface DefaultLayout {
  children: React.ReactNode;
}

export default function Layout({ children }: DefaultLayout) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

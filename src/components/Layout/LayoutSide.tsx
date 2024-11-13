"use client"
import { FC, ReactNode } from "react";
import scss from "./LayoutSide.module.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface LayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  return (
    <>
      <div className={scss.LayoutSite}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default LayoutSite;

import React from "react";
import Navbar from "../../components/navbar/Navbar.component";
import { Main } from "./Template.style";
import navData from "../../common/TestData";

const Template: React.FC<any> = ({ children }) => {
  return (
    <>
      <Navbar navData={navData} />
      <Main>
        <aside id="left" />
        <div id="center">{children}</div>
        <aside id="right" />
      </Main>
      <div className="footer" />
    </>
  );
};

export default Template;

import React from "react";
import Navbar from "../../components/navbar/Navbar.component";
import { NavbarType } from "../../common/Types";
import "./Template.style.scss";

const navData: NavbarType[] = [
  {
    name: "Food-Blog",
    url: "/"
  },
  {
    name: "Write",
    url: "/write"
  }
];
const Template: React.FC<any> = ({ children }) => {
  return (
    <>
      <Navbar navData={navData} />
      <div className="main_container">
        <aside id="left" />
        <div id="center">{children}</div>
        <aside id="right" />
      </div>
      <div className="footer" />
    </>
  );
};

export default Template;

import React from "react";
import Navbar from "../../components/navbar/Navbar.component";
import { NavbarType } from "../../common/Types";
import { Main } from "./Template.style";

const navData: NavbarType[] = [
  {
    name: "Food-Blog",
    url: "/"
  },
  {
    name: "",
    url: ""
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

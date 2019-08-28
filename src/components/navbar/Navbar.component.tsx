import React from "react";
import { Toolbar } from "@material-ui/core";
import { HomeSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { NavbarType } from "../../common/Types";
import NavItem from "../nav-item/NavItem.component";
import Login from "../login/Login.component";
import { NavBarBlue, NavWhiteElement } from "./Navbar.style";

const Navbar = ({ navData }: any) => {
  return (
    <NavBarBlue>
      <Toolbar>
        <Link to="/">
          <NavWhiteElement>
            <HomeSharp />
          </NavWhiteElement>
        </Link>
        {navData.map((e: NavbarType, index: number) => (
          <NavItem key={index} data={e} />
        ))}
        <Login />
      </Toolbar>
    </NavBarBlue>
  );
};

export default Navbar;

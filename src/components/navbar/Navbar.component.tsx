import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { HomeSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { NavbarType } from "../../common/Types";
import NavItem from "../nav-item/NavItem.component";
import Login from "../login/Login.component";
import "./Navbar.style.scss";

const Navbar = ({ navData }: any) => {
  return (
    <AppBar id="navbar" position="fixed">
      <Toolbar>
        <Link to="/">
          <IconButton className="white_mode">
            <HomeSharp />
          </IconButton>
        </Link>
        {navData.map((e: NavbarType, index: number) => (
          <NavItem key={index} data={e} />
        ))}
        <Login />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import React from "react";
import { HomeSharp, Search, Create } from "@material-ui/icons";
import Login from "../login/Login.component";
import {
  FlexToolbar,
  ItemLink,
  NavBarBlue,
  NavWhiteElement
} from "./Navbar.style";

const Navbar: React.FC = () => {
  return (
    <NavBarBlue>
      <FlexToolbar>
        <ItemLink to="/">
          <NavWhiteElement>
            <HomeSharp />
          </NavWhiteElement>
        </ItemLink>
        <ItemLink to="/search">
          <NavWhiteElement>
            <Search />
          </NavWhiteElement>
        </ItemLink>
        <ItemLink to="">
          <NavWhiteElement />
        </ItemLink>
        <ItemLink to="/write">
          <NavWhiteElement>
            <Create />
          </NavWhiteElement>
        </ItemLink>
        <Login />
      </FlexToolbar>
    </NavBarBlue>
  );
};

export default Navbar;

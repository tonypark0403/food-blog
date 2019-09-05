import React from "react";
import { Typography } from "@material-ui/core";
import { NavWhiteElement } from "./NavItem.style";

const NavItem = ({ data }: any) => {
  const { url, name } = data;
  return (
    <NavWhiteElement to={url}>
      <Typography variant="button">{name}</Typography>
    </NavWhiteElement>
  );
};

export default NavItem;

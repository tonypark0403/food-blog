import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const NavItem = ({ data }: any) => {
  const { url, name } = data;
  console.log(data);
  return (
    <Link to={url} className="white_mode">
      <Typography variant="button">{name}</Typography>
    </Link>
  );
};

export default NavItem;

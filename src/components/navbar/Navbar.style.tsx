import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import Colors from "../../common/colors";

export const NavBarBlue = styled(AppBar)`
  background-color: ${Colors.myBlue}!important;
  min-height: 65px;
  @media screen and (max-width: 500px) {
    min-height: 70px;
    padding-top: 6px;
  }
`;

export const FlexToolbar = styled(Toolbar)`
  display: flex;
`;

export const ItemLink = styled(Link)`
  &:nth-child(3) {
    flex: 1;
    opacity: 0;
    cursor: default;
  }
`;

export const NavWhiteElement = styled(IconButton)`
  position: fixed;
  color: white !important;
  text-decoration: none !important;
`;

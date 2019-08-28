import styled from "styled-components";
import { AppBar, IconButton } from "@material-ui/core";
import Colors from "../../common/colors";

export const NavBarBlue = styled(AppBar)`
  background-color: ${Colors.myBlue}!important;
  min-height: 65px;
  @media screen and (max-width: 500px) {
    min-height: 70px;
    padding-top: 6px;
  }
`;

export const NavWhiteElement = styled(IconButton)`
  position: fixed;
  color: white !important;
  text-decoration: none !important;
`;

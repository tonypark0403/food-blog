import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";

const OptionLinkStyle = css`
  text-decoration: none;
  color: black;
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const OptionLink = styled(Link)`
  ${OptionLinkStyle}
`;

export const OptionMenuItem = styled(MenuItem)`
  ${OptionLinkStyle}
`;

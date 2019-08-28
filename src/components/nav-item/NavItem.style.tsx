import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWhiteElement = styled(Link)`
  color: white !important;
  text-decoration: none !important;
  &:nth-child(3) {
    flex: 1;
    opacity: 0;
    cursor: default;
  }
`;

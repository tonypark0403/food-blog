import styled from "styled-components";
import { DialogContentText } from "@material-ui/core";
import Colors from "../../../common/colors";

export const ErrorDialogContentText = styled(DialogContentText)`
  color: ${Colors.myRed};
  font-size: 14px;
  text-align: center;
`;

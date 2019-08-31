import React from "react";
import {
  Dialog,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";

import { LoginDialogProps } from "../../common/Types";
import {
  BluebarDialogTitle,
  FacebookAvatar,
  GoogleAvatar
} from "./LoginDialog.style";

const LoginDialog: React.FC<LoginDialogProps> = ({ open, onClose }) => {
  const handleClose = (windowStatus: boolean) => {
    onClose(windowStatus);
  };
  return (
    <Dialog onClose={() => handleClose(false)} open={open}>
      <BluebarDialogTitle>&nbsp;Login Methods&nbsp;</BluebarDialogTitle>
      <List>
        <ListItem button onClick={() => handleClose(true)}>
          <ListItemAvatar>
            <Avatar>L</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Local" />
        </ListItem>
        <ListItem button disabled>
          <ListItemAvatar>
            <FacebookAvatar>F</FacebookAvatar>
          </ListItemAvatar>
          <ListItemText primary="Facebook" />
        </ListItem>
        <ListItem button disabled>
          <ListItemAvatar>
            <GoogleAvatar>G</GoogleAvatar>
          </ListItemAvatar>
          <ListItemText primary="Google" />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default LoginDialog;

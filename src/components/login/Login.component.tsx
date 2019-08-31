import React, { Component } from "react";

import { Avatar, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import LoginDialog from "../login_dialog/LoginDialog.component";
import LoginLocal from "../login_local/LoginLocal.component";

class Login extends Component<any> {
  state = {
    loginDialog: {
      open: false,
      local: false
    },
    user: {
      email: "",
      name: "",
      address: "",
      picture: "",
      error: ""
    }
  };

  handleOpen = () => {
    this.setState({ loginDialog: { open: true } });
  };

  handleClose = (local: boolean) => {
    this.setState({ loginDialog: { open: false, local } });
  };

  handleLogin = (email: string, password: string) => {
    console.log("login");
  };

  render() {
    const {
      loginDialog: { open, local },
      user: { email, picture, error }
    } = this.state;
    const { handleOpen, handleClose, handleLogin } = this;
    const loginRender =
      email === "" ? (
        <>
          <IconButton style={{ color: "white" }} onClick={handleOpen}>
            <AccountCircle />
          </IconButton>
          <LoginDialog open={open} onClose={handleClose}></LoginDialog>
          <LoginLocal
            local={local}
            onClose={handleClose}
            login={handleLogin}
            error={error}
          />
        </>
      ) : (
        <Avatar src={picture} />
      );

    return loginRender;
  }
}

export default Login;

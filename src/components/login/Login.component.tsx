import React, { Component } from "react";

import { IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import "./Login.style.scss";

class Login extends Component<any> {
  render() {
    return (
      <IconButton style={{ color: "white" }}>
        <AccountCircle />
      </IconButton>
    );
  }
}

export default Login;

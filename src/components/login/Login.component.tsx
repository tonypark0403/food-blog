import React, { Component } from "react";
import { connect } from "react-redux";

import { Avatar, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import LoginDialog from "../login_dialog/LoginDialog.component";
import LoginLocal from "../login_local/LoginLocal.component";
import { UserState, StoreState } from "../../common/Types";
import { loginUser } from "../../redux/user/user.actions";

class Login extends Component<any> {
  state = {
    loginDialog: {
      open: false,
      local: false
    }
  };

  handleOpen = () => {
    this.setState({ loginDialog: { open: true } });
  };

  handleClose = (local: boolean) => {
    this.setState({ loginDialog: { open: false, local } });
  };

  render() {
    const {
      loginDialog: { open, local }
    } = this.state;
    const {
      user: { email, picture, error },
      handleLogin
    } = this.props;
    const { handleOpen, handleClose } = this;
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

const mapStateToProps = (state: StoreState) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch: any) => ({
  handleLogin: (user: UserState) => dispatch(loginUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

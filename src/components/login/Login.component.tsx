import React, { Component } from "react";
import { connect } from "react-redux";
import { Avatar, IconButton, Menu, MenuItem, Divider } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { OptionLink, OptionMenuItem } from "./Login.style";
import LoginDialog from "../login_dialog/LoginDialog.component";
import LoginLocal from "../login_local/LoginLocal.component";
import { StoreState } from "../../common/Types";
import { loginUser } from "../../redux/user/user.actions";

class Login extends Component<any> {
  anchorRef: React.MutableRefObject<any>;

  constructor(props: any) {
    super(props);
    this.anchorRef = React.createRef<any>();
  }

  state = {
    loginDialog: {
      open: false,
      local: false
    },
    userMenu: false
  };

  handleOpen = () => {
    this.setState({ loginDialog: { open: true, local: false } });
  };

  handleClose = (local: boolean) => {
    this.setState({ loginDialog: { open: false, local } });
  };

  userMenuToggle = () => {
    this.setState({ userMenu: !this.state.userMenu });
  };

  render() {
    const {
      loginDialog: { open, local },
      userMenu
    } = this.state;
    const {
      user: { name, email, picture, error },
      handleRegister,
      handleLogin,
      googleLogin,
      logout
    } = this.props;
    const { anchorRef, handleOpen, handleClose, userMenuToggle } = this;
    const loginRender =
      email === "" ? (
        <IconButton style={{ color: "white" }} onClick={handleOpen}>
          <AccountCircle />
        </IconButton>
      ) : (
        <>
          <IconButton onClick={userMenuToggle}>
            <Avatar ref={anchorRef} src={picture} />
          </IconButton>
          <Menu
            open={userMenu}
            anchorEl={anchorRef.current}
            keepMounted
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            onClose={userMenuToggle}
          >
            <OptionLink to="/user" onClick={userMenuToggle}>
              <MenuItem>{name}</MenuItem>
            </OptionLink>
            <Divider variant="fullWidth" component="ul" />
            <OptionMenuItem
              onClick={() => {
                logout();
                userMenuToggle();
              }}
            >
              Logout
            </OptionMenuItem>
          </Menu>
        </>
      );

    return (
      <>
        {loginRender}
        <LoginDialog
          open={open}
          onClose={handleClose}
          googleLogin={googleLogin}
        ></LoginDialog>
        <LoginLocal
          local={local}
          onClose={handleClose}
          login={handleLogin}
          error={error}
          userRegister={handleRegister}
        />
      </>
    );
  }
}
const mapStateToProps = (state: StoreState) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch: any) => ({
  handleLogin: (email: string, password: string, cb: any) =>
    dispatch(loginUser(email, password, cb))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

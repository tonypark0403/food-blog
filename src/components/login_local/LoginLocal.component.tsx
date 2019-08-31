import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button
} from "@material-ui/core";
import { LoginLocalProps } from "../../common/Types";

class LoginLocal extends Component<LoginLocalProps, any> {
  state = {
    login: {
      open: false
    },
    user: {
      email: "",
      password: ""
    }
  };

  handleInput = (event: any) => {
    const { name, value } = event.target;
    this.setState({
      user: {
        [name]: value
      }
    });
  };

  loginRequest = () => {
    this.props.login(this.state.user.email, this.state.user.password);
  };

  render() {
    const { local, error, onClose } = this.props;
    const { email, password } = this.state.user;
    const { handleInput, loginRequest } = this;
    return (
      <Dialog open={local}>
        <DialogTitle>Local</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            value={email}
            onChange={handleInput}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            value={password}
            onChange={handleInput}
            fullWidth
          />
        </DialogContent>
        <DialogContentText>{error}</DialogContentText>
        <DialogActions>
          <Button onClick={loginRequest}>Login</Button>
          <Button onClick={() => onClose(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default LoginLocal;

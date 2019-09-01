import React from "react";
import {
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from "@material-ui/core";
import { ErrorDialogContentText } from "./LoginUI.style";

const LoginUI: React.FC<any> = ({
  email,
  password,
  handleInput,
  toggleRegister,
  loginRequest,
  error,
  onClose
}) => {
  return (
    <>
      <DialogTitle>Local Login</DialogTitle>
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
      <ErrorDialogContentText>{error}</ErrorDialogContentText>
      <DialogActions>
        <Button color="primary" onClick={toggleRegister}>
          Register
        </Button>
        <Button color="primary" onClick={loginRequest}>
          Login
        </Button>
        <Button color="secondary" onClick={() => onClose(false)}>
          Cancel
        </Button>
      </DialogActions>
    </>
  );
};

export default LoginUI;

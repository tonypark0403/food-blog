import React from "react";
import {
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from "@material-ui/core";
import { ErrorDialogContentText } from "./RegisterUI.style";

const RegisterUI: React.FC<any> = ({
  email,
  password,
  retypedPassword,
  registerError,
  name,
  address,
  handleInput,
  toggleRegister,
  registerRequest,
  onClose
}) => {
  return (
    <>
      <DialogTitle>Local Register</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Name"
          type="name"
          value={name}
          onChange={handleInput}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Address"
          type="address"
          value={address}
          onChange={handleInput}
          fullWidth
        />
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
        <TextField
          margin="dense"
          label="Password Confirmation"
          type="password"
          value={retypedPassword}
          onChange={handleInput}
          fullWidth
        />
      </DialogContent>
      <ErrorDialogContentText>{registerError}</ErrorDialogContentText>
      <DialogActions>
        <Button color="primary" onClick={toggleRegister}>
          Back
        </Button>
        <Button color="primary" onClick={registerRequest}>
          Register
        </Button>
        <Button color="secondary" onClick={() => onClose(false)}>
          Cancel
        </Button>
      </DialogActions>
    </>
  );
};

export default RegisterUI;

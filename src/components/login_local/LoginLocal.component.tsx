import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Dialog } from "@material-ui/core";
import { LoginLocalProps } from "../../common/Types";
import RegisterUI from "../login/registerUI/RegisterUI.component";
import LoginUI from "../login/loginUI/LoginUI.component";

class LoginLocal extends Component<LoginLocalProps, any> {
  state = {
    email: "",
    password: "",
    retypedPassword: "",
    register: false,
    registerError: "",
    name: "",
    address: "",
    successToLogin: false
  };

  handleInput = (event: any) => {
    const { type, value } = event.target;
    console.log(type + ", " + value);
    this.setState({
      [type]: value
    });
  };

  loginRequest = () => {
    this.props.login(
      this.state.email.toLowerCase(),
      this.state.password,
      (err: string, sucess: any) => {
        if (err) {
          return;
        }
        this.setState({ successToLogin: true });
        this.props.onClose(false);
        return <Redirect to="/" />;
      }
    );
  };

  registerRequest = () => {
    this.setState({ registerError: "" });
    const { email, address, name, password, retypedPassword } = this.state;
    if (address === "" || name === "") {
      this.setState({ registerError: "All fields are required" });
      return;
    }
    if (!email.match(/[A-z0-9]+@[A-z0-9.-]+\.[A-z]{2,4}$/g)) {
      this.setState({ registerError: "Email format is not allowed" }, () =>
        console.log(this.state)
      );
      return;
    }
    if (password.length < 5) {
      this.setState({ registerError: "Password must be over 5 char" });
      return;
    }
    if (password === "" || password !== retypedPassword) {
      this.setState({ registerError: "Password is not matched" });
      return;
    }
    this.props.userRegister(
      email,
      address,
      name,
      password,
      (err: any, status: boolean) => {
        if (err) {
          this.setState({ registerError: err });
          return;
        }
        console.log(status);
        window.alert("success to regist");
        this.toggleRegister();
      }
    );
  };

  toggleRegister = () => {
    this.setState({
      register: !this.state.register,
      registerError: "",
      email: "",
      password: "",
      retypedPassword: "",
      name: "",
      address: "",
      successToLogin: false
    });
  };

  render() {
    const { error, onClose } = this.props;
    const { handleInput, loginRequest, registerRequest, toggleRegister } = this;
    return (
      <Dialog open={this.props.local}>
        {this.state.register ? (
          <RegisterUI
            {...this.state}
            handleInput={handleInput}
            registerRequest={registerRequest}
            toggleRegister={toggleRegister}
            onClose={onClose}
          />
        ) : (
          <LoginUI
            {...this.state}
            handleInput={handleInput}
            loginRequest={loginRequest}
            toggleRegister={toggleRegister}
            error={error}
            onClose={onClose}
          />
        )}
      </Dialog>
    );
  }
}

export default LoginLocal;

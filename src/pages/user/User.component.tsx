import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { StoreState, UserState } from "../../common/Types";
import { loginUser } from "../../redux/user/user.actions";

const User = ({ user }: StoreState) => {
  const { email } = user;
  const redirecting = () => {
    if (email === "") {
      return <Redirect to="/" />;
    }
  };
  return (
    <>
      {redirecting()}
      <div>
        {Object.keys(user).map((key, i) => {
          return (
            <p key={i}>
              {key}: {user[key]}
            </p>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch: any) => ({
  handleLogin: (user: UserState) => dispatch(loginUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

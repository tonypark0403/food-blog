import * as ActionTypes from "./user.actionTypes";
import { UserState } from "../../common/Types";
import UserService from "./user.service";
import { encrypting } from "../../common/crypto";

const userService = new UserService();

export const saveUser = (user: UserState) => ({
  type: ActionTypes.SAVE_USER_SUCCESS,
  payload: user
});

export const loginUser = (
  email: string,
  password: string,
  cb: (error: string | null, success: boolean) => void
) => async (dispatch: any) => {
  try {
    console.log("userservice : " + email + ", " + password);
    const token = await userService.tryLogin(email, password);
    localStorage.setItem("token", encrypting(token.token));
    console.log("token", token);
    const user = await userService.getUsers();
    console.log("user******", user);
    dispatch({
      type: ActionTypes.LOGIN_USER_SUCCESS,
      payload: user
    });
    cb(null, true);
  } catch (err) {
    dispatch({
      type: ActionTypes.LOGIN_USER_FAILURE,
      payload: err
    });
    cb(err, false);
  }
};

export const googleUser = (user: UserState) => ({
  type: ActionTypes.GOOGLE_USER,
  payload: user
});

export const error = (user: UserState) => ({
  type: ActionTypes.ERROR,
  payload: user
});

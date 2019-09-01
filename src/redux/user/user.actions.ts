import * as ActionTypes from "./user.actionTypes";
import { UserState } from "../../common/Types";

export const saveUser = (user: UserState) => ({
  type: ActionTypes.SAVE_USER,
  payload: user
});

export const loginUser = (user: UserState) => ({
  type: ActionTypes.LOGIN_USER,
  payload: user
});

export const googleUser = (user: UserState) => ({
  type: ActionTypes.GOOGLE_USER,
  payload: user
});

export const error = (user: UserState) => ({
  type: ActionTypes.ERROR,
  payload: user
});

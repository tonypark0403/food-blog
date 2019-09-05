import { Reducer } from "redux";
import * as ActionTypes from "./user.actionTypes";
import { UserState } from "../../common/Types";

const initialState: UserState = {
  email: "",
  name: "",
  picture: "",
  error: ""
};

const reducer: Reducer<UserState> = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SAVE_USER_SUCCESS:
      return {
        email: action.payload.email,
        name: action.payload.name,
        address: action.payload.address,
        picture: action.payload.picture,
        error: ""
      };
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        email: action.payload.email,
        name: action.payload.name,
        picture: action.payload.picture,
        error: ""
      };
    case ActionTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case ActionTypes.ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;

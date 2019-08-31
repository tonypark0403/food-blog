import { Reducer } from "redux";
import * as ActionTypes from "./user.actionTypes";
import { UserState } from "../../common/Types";

const initialState: UserState = {
  email: "",
  name: "",
  address: "",
  picture: "",
  error: ""
};

const reducer: Reducer<UserState> = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SAVE_USER:
      return {
        email: action.data.email,
        name: action.data.name,
        address: action.data.address,
        picture: action.data.picture,
        error: ""
      };
    case ActionTypes.LOGIN_USER:
      return {
        email: action.data.email,
        name: action.data.name,
        address: action.data.address,
        picture: action.data.picture,
        error: ""
      };
    case ActionTypes.ERROR:
      return {
        ...state,
        error: action.data
      };
    default:
      return state;
  }
};

export default reducer;

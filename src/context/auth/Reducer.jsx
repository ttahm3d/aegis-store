import { LOGIN, LOGOUT, SIGNUP } from "./utils/constants";

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: localStorage.getItem("user-token") ? true : false,
        user: payload,
      };
    case SIGNUP:
      return {
        ...state,
        isLoggedIn: localStorage.getItem("user-token") ? true : false,
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export { authReducer };

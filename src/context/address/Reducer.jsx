import { GET_ADDRESS, ADD_ADDRESS } from "./utils/constants";

const addressReducer = (state, action) => {
  switch (action.type) {
    case GET_ADDRESS:
    case ADD_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};

export { addressReducer };

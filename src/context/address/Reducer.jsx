const addressReducer = (state, action) => {
  switch (action.type) {
    case "GET_ADDRESS":
    case "ADD_ADDRESS":
      return {
        ...state,
        address: payload,
      };
    default:
      return state;
  }
};

export { addressReducer };

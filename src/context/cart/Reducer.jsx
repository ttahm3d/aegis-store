const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_CART_ITEMS":
    case "ADD_TO_CART":
    case "INCREASE_QUANTITY":
    case "DECREASE_QUANTITY":
    case "REMOVE_FROM_CART":
      return { ...state, cartItems: payload };
    default:
      return state;
  }
};

export { cartReducer };

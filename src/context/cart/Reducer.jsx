const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_CART_ITEMS":
      return { ...state, cart: payload };
  }
};

export { cartReducer };

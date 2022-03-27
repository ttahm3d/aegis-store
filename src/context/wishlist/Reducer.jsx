const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_WISHLIST":
    case "ADD_TO_WISHLIST":
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: payload,
      };
    default:
      return state;
  }
};

export { wishlistReducer };

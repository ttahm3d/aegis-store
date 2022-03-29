const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_WISHLIST":
    case "ADD_TO_WISHLIST":
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: payload,
        wishlistSize: payload.length,
      };
    default:
      return state;
  }
};

export { wishlistReducer };

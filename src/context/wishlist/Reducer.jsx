const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.some((item) => item._id === payload._id)
          ? state.wishlist.filter((item) => item._id !== payload._id)
          : [...state.wishlist, payload],
      };
    case "GET_WISHLIST":
      return {
        ...state,
        wishlist: payload,
      };
    default:
      return state;
  }
};

export { wishlistReducer };

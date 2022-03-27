const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, payload] };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item._id !== payload._id),
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

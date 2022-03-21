const productsReducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT_BY":
      return { ...state, sortBy: payload };
    case "ADD_CATEGORY_TO_CATEGORIES":
      return { ...state, categories: [...state.categories, payload] };
    case "REMOVE_CATEGORY_FROM_CATEGORIES":
      return {
        ...state,
        categories: state.categories.filter((category) => category !== payload),
      };
    case "MIN_PRICE":
      return { ...state, minPrice: Number(payload) };
    case "RESET":
      return {
        sortBy: "",
        categories: [],
        minPrice: 0,
      };
    default:
      return state;
  }
};

export { productsReducer };

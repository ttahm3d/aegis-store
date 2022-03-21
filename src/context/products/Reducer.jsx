const productsReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.name]: action.payload.value,
        },
      };
    case "RESET":
      return {
        sortBy: "",
      };
    default:
      return state;
  }
};

export { productsReducer };

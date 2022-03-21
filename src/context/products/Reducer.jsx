const productsReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload };
    case "ADD_CATEGORY_TO_CATEGORIES":
      return { ...state, categories: [...state.categories, action.payload] };
    case "REMOVE_CATEGORY_FROM_CATEGORIES":
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category !== action.payload
        ),
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

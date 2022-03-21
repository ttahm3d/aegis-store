const sortProducts = (state, products) => {
  const sortedProducts = [...products];
  switch (state.sortBy) {
    case "low-to-high":
      return sortedProducts.sort(
        (prodA, prodB) => Number(prodA.price) - Number(prodB.price)
      );
    case "high-to-low":
      return sortedProducts.sort(
        (prodA, prodB) => Number(prodB.price) - Number(prodA.price)
      );
    default:
      return products;
  }
};

const filterProductsByCategory = (state, products) => {
  return state.categories.length === 0
    ? products
    : products.filter((product) =>
        state.categories.some((category) => category === product?.categoryName)
      );
};

const getResultantProducts =
  (state, ...filters) =>
  (products) =>
    filters.reduce((filter, curFn) => curFn(state, filter), products);

export { sortProducts, filterProductsByCategory, getResultantProducts };

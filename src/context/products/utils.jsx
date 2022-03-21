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

const filterByRating = (state, products) => {
  if (state.rating !== 0) {
    return products.filter((product) => product.rating > state.rating);
  }
  return products;
};

const filterProductsByCategory = (state, products) => {
  return state.categories.length === 0
    ? products
    : products.filter((product) =>
        state.categories.some((category) => category === product?.categoryName)
      );
};

const filterProductsWithMinPrice = (state, products) =>
  products.filter((product) => product.price >= state.minPrice);

const getResultantProducts =
  (state, ...filters) =>
  (products) =>
    filters.reduce((filter, curFn) => curFn(state, filter), products);

export {
  sortProducts,
  filterProductsByCategory,
  filterProductsWithMinPrice,
  filterByRating,
  getResultantProducts,
};

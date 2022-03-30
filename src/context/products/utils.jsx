const sortProductsByPrice = (state, products) => {
  const sortedProducts = [...products];
  switch (state.sortByPrice) {
    case "low-to-high-price":
      return sortedProducts.sort(
        (prodA, prodB) =>
          Number(prodA.sellingPrice) - Number(prodB.sellingPrice)
      );
    case "high-to-low-price":
      return sortedProducts.sort(
        (prodA, prodB) =>
          Number(prodB.sellingPrice) - Number(prodA.sellingPrice)
      );
    default:
      return products;
  }
};

const sortProductByRatings = (state, products) => {
  const sortedProducts = [...products];
  switch (state.sortByRating) {
    case "low-to-high-rating":
      return sortedProducts.sort(
        (prodA, prodB) => Number(prodA.rating) - Number(prodB.rating)
      );
    case "high-to-low-rating":
      return sortedProducts.sort(
        (prodA, prodB) => Number(prodB.rating) - Number(prodA.rating)
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
  products.filter((product) => product.sellingPrice >= state.minPrice);

const filterOutOutOfStockProducts = (state, products) =>
  state.showOnlyInStock
    ? products.filter((product) => product.count !== 0)
    : products;

const showFastDeliveryProducts = (state, products) =>
  state.fastDelivery
    ? products.filter((product) => product.aegisAssured)
    : products;

const getResultantProducts =
  (state, ...filters) =>
  (products) =>
    filters.reduce((filter, curFn) => curFn(state, filter), products);

export {
  sortProductsByPrice,
  sortProductByRatings,
  filterProductsByCategory,
  filterProductsWithMinPrice,
  filterByRating,
  filterOutOutOfStockProducts,
  showFastDeliveryProducts,
  getResultantProducts,
};

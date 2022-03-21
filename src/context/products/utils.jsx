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

const filterProductsByCategory = (state, products) => {};

export { sortProducts, getResultantProducts, filterProductsByCategory };

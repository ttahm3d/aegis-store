const getProductById = (productId, products) =>
  products.find((product) => product._id === productId);

export { getProductById };

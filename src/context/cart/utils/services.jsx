import axios from "axios";

const addToCartHandler = (product) =>
  axios.post(
    "/api/user/cart",
    { product },
    {
      headers: {
        authorization: JSON.parse(localStorage.getItem("user-token")),
      },
    }
  );

const decreaseItemQuantityHandler = (productId) =>
  axios.post(
    `/api/user/cart/${productId}`,
    { action: { type: "increment" } },
    {
      headers: {
        authorization: JSON.parse(localStorage.getItem("user-token")),
      },
    }
  );

const getCartItemsHandler = () =>
  axios.get("/api/user/cart", {
    headers: {
      authorization: JSON.parse(localStorage.getItem("user-token")),
    },
  });

const increaseItemQuantityHandler = (productId) =>
  axios.post(
    `/api/user/cart/${productId}`,
    { action: { type: "increment" } },
    {
      headers: {
        authorization: JSON.parse(localStorage.getItem("user-token")),
      },
    }
  );

const removeFromCartHandler = (product) =>
  axios.delete(`/api/user/cart/${product._id}`, {
    headers: {
      authorization: JSON.parse(localStorage.getItem("user-token")),
    },
  });

export {
  addToCartHandler,
  decreaseItemQuantityHandler,
  getCartItemsHandler,
  increaseItemQuantityHandler,
  removeFromCartHandler,
};

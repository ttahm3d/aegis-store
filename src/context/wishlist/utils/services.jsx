import axios from "axios";

const addToWishlistHandler = (product) =>
  axios.post(
    "/api/user/wishlist",
    {
      product,
    },
    {
      headers: {
        authorization: JSON.parse(localStorage.getItem("user-token")),
      },
    }
  );

const getWishlistItemsHandler = () =>
  axios.get("/api/user/wishlist", {
    headers: {
      authorization: JSON.parse(localStorage.getItem("user-token")),
    },
  });

const removeFromWishlistHandler = () =>
  axios.delete(`/api/user/wishlist/${product._id}`, {
    headers: {
      authorization: JSON.parse(localStorage.getItem("user-token")),
    },
  });

export {
  addToWishlistHandler,
  getWishlistItemsHandler,
  removeFromWishlistHandler,
};

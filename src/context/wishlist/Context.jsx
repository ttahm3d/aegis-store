import axios from "axios";
import { useContext, useEffect, useReducer, createContext } from "react";
import { Toast } from "../../components";
import { useAuth } from "../auth";
import { wishlistReducer } from "./Reducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
    wishlistSize: 0,
  });

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    async function fetchWishlist() {
      try {
        const res = await axios.get("/api/user/wishlist", {
          headers: {
            authorization: JSON.parse(localStorage.getItem("user-token")),
          },
        });
        if (res.status === 200) {
          wishlistDispatch({
            type: "GET_WISHLIST",
            payload: res?.data?.wishlist,
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
    if (isLoggedIn) fetchWishlist();
  }, []);

  const addToWishlist = async (product) => {
    if (isLoggedIn) {
      if (wishlistState.wishlist.some((item) => item._id === product._id)) {
        removeFromWishlist(product);
      } else {
        try {
          const res = await axios.post(
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
          if (res.status === 201) {
            wishlistDispatch({
              type: "ADD_TO_WISHLIST",
              payload: res?.data?.wishlist,
            });
            Toast({
              type: "info",
              message: `${product.name} has been added to wishlist`,
            });
          }
        } catch (e) {
          console.error(e);
          Toast({
            type: "error",
            message: `${product.name} could not be added to wishlist. Try again`,
          });
        }
      }
    } else
      Toast({ type: "error", message: "Please login to perform this action" });
  };

  const removeFromWishlist = async (product) => {
    try {
      const res = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers: {
          authorization: JSON.parse(localStorage.getItem("user-token")),
        },
      });
      if (res.status === 200) {
        Toast({
          type: "warning",
          message: `${product.name} has been removed from wishlist`,
        });
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: res?.data?.wishlist,
        });
      }
    } catch (e) {
      console.error(e);
      Toast({
        type: "error",
        message: `${product.name} could not removed from wishlist. Try again`,
      });
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist: wishlistState.wishlist,
        wishlistSize: wishlistState.wishlistSize,
        wishlistDispatch,
        addToWishlist,
        removeFromWishlist,
      }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };

import axios from "axios";
import { useContext, useEffect, useReducer, createContext } from "react";
import { Toast } from "../../components";
import { useLocalStorage } from "../../hooks";
import { wishlistReducer } from "./Reducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });
  const [token] = useLocalStorage("user-token");
  const headerConfig = {
    headers: {
      authorization: token,
    },
  };

  useEffect(() => {
    async function fetchWishlist() {
      try {
        const res = await axios.get("/api/user/wishlist", headerConfig);
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
    fetchWishlist();
  }, []);

  const addToWishlist = async (product) => {
    if (wishlistState.wishlist.some((item) => item._id === product._id)) {
      removeFromWishlist(product);
    } else {
      try {
        const res = await axios.post(
          "/api/user/wishlist",
          {
            product,
          },
          headerConfig
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
  };

  const removeFromWishlist = async (product) => {
    try {
      const res = await axios.delete(
        `/api/user/wishlist/${product._id}`,
        headerConfig
      );
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

import axios from "axios";
import { useContext, useEffect, useReducer, createContext } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../auth";
import { wishlistReducer } from "./Reducer";
import {
  SET_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "./utils/constants";
import {
  getWishlistItems,
  addToWishlistHandler,
  removeFromWishlistHandler,
} from "./utils/services";

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
        const res = await getWishlistItemsHandler();
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

  const addToWishlist = async (product, page) => {
    if (isLoggedIn) {
      if (page === "cart") return;
      else if (
        wishlistState.wishlist.some((item) => item._id === product._id) &&
        page === "product"
      ) {
        removeFromWishlist(product);
      } else {
        try {
          const res = await addToWishlistHandler(product);
          if (res.status === 201) {
            wishlistDispatch({
              type: "ADD_TO_WISHLIST",
              payload: res?.data?.wishlist,
            });
            toast.success(`${product.name} has been added to wishlist`);
          }
        } catch (e) {
          console.error(e);
          toast.error(
            `${product.name} could not be added to wishlist. Try again`
          );
        }
      }
    } else
      Toast({ type: "error", message: "Please login to perform this action" });
  };

  const removeFromWishlist = async (product) => {
    try {
      const res = await removeFromWishlist(product);
      if (res.status === 200) {
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: res?.data?.wishlist,
        });
        toast.success(`${product.name} has been removed wishlist`);
      }
    } catch (e) {
      console.error(e);
      toast.error(`${product.name} could not removed from wishlist. Try again`);
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

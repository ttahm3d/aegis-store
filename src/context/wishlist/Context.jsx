import axios from "axios";
import { useContext, useEffect, useReducer, createContext } from "react";
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
            type: "SET_WISHLIST",
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
    const res = await axios.post(
      "/api/user/wishlist",
      {
        product,
      },
      headerConfig
    );
    if (wishlistState.wishlist.some((item) => item._id === product._id)) {
      removeFromWishlist(product);
    }
    if (res.status === 201) {
      wishlistDispatch({
        type: "SET_WISHLIST",
        payload: res?.data?.wishlist,
      });
    }
  };

  const removeFromWishlist = async (product) => {
    const res = await axios.delete(
      `/api/user/wishlist/${product._id}`,
      headerConfig
    );
    if (res.status === 200) {
      wishlistDispatch({
        type: "SET_WISHLIST",
        payload: res?.data?.wishlist,
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

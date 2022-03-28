import axios from "axios";
import { useContext, useEffect, useReducer, createContext } from "react";
import { Toast } from "../../components";
import { useWishlist } from "../wishlist/";
import { useLocalStorage } from "../../hooks";
import { cartReducer } from "./Reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartItems: [],
  });

  const { addToWishlist } = useWishlist();

  const [token] = useLocalStorage("user-token");
  const headerConfig = {
    headers: {
      authorization: token,
    },
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/user/cart", headerConfig);
        if (res.status === 200) {
          cartDispatch({
            type: "GET_CART_ITEMS",
            payload: res?.data?.cart,
          });
        }
        console.log(res?.data?.cart);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const addToCart = async (product) => {
    if (cartState.cartItems.some((cartItem) => cartItem._id === product._id)) {
      incrementQuantityOfItem(product);
    } else {
      try {
        const res = await axios.post(
          "/api/user/cart",
          { product },
          headerConfig
        );
        if (res.status === 201) {
          cartDispatch({
            type: "ADD_TO_CART",
            payload: res?.data?.cart,
          });
          console.log(res);
          Toast({
            type: "success",
            message: `${product.name} has been added to cart`,
          });
        }
      } catch (e) {
        console.error(e);
        Toast({
          type: "error",
          message: "Something went wrong. Try again.",
        });
      }
    }
  };

  const removeFromCart = async (product) => {
    try {
      const res = await axios.delete(
        `/api/user/cart/${product._id}`,
        headerConfig
      );
      if (res.status === 200) {
        cartDispatch({
          type: "REMOVE_FROM_CART",
          payload: res?.data?.cart,
        });
        Toast({
          type: "success",
          message: `${product.name} has been removed from cart`,
        });
      }
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const moveToWishlist = (product) => {
    removeFromCart(product);
    addToWishlist(product);
  };

  const incrementQuantityOfItem = async (product) => {
    try {
      const res = await axios.post(
        `/api/user/cart/${product._id}`,
        { action: { type: "increment" } },
        headerConfig
      );
      if (res.status === 200) {
        cartDispatch({
          type: "INCREASE_QUANTITY",
          payload: res?.data?.cart,
        });
        Toast({
          type: "success",
          message: `${product.name}'s quantity increased by 1`,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const decrementQuantityOfItem = async (product) => {
    if (product.qty === 1) {
      removeFromCart(product);
    } else {
      try {
        const res = await axios.post(
          `/api/user/cart/${product._id}`,
          { action: { type: "decrement" } },
          headerConfig
        );
        if (res.status === 200) {
          cartDispatch({
            type: "INCREASE_QUANTITY",
            payload: res?.data?.cart,
          });
          Toast({
            type: "success",
            message: `${product.name}'s quantity decreased by 1`,
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cartItems,
        addToCart,
        removeFromCart,
        incrementQuantityOfItem,
        decrementQuantityOfItem,
        moveToWishlist,
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };

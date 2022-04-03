import axios from "axios";
import { useContext, useEffect, useReducer, createContext } from "react";
import { Toast } from "../../components";
import { useAuth } from "../auth";
import { useWishlist } from "../wishlist/";
import { cartReducer } from "./Reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartItems: [],
    cartSize: 0,
    cartTotalAmount: 0,
  });

  const { isLoggedIn } = useAuth();

  const { addToWishlist } = useWishlist();

  useEffect(() => {
    if (isLoggedIn)
      (async () => {
        try {
          const res = await axios.get("/api/user/cart", {
            headers: {
              authorization: JSON.parse(localStorage.getItem("user-token")),
            },
          });
          if (res.status === 200) {
            cartDispatch({
              type: "GET_CART_ITEMS",
              payload: res?.data?.cart,
            });
          }
        } catch (e) {
          console.error(e);
        }
      })();
  }, []);

  const addToCart = async (product) => {
    if (isLoggedIn) {
      if (
        cartState.cartItems.some((cartItem) => cartItem._id === product._id)
      ) {
        incrementQuantityOfItem(product);
      } else {
        try {
          const res = await axios.post(
            "/api/user/cart",
            { product },
            {
              headers: {
                authorization: JSON.parse(localStorage.getItem("user-token")),
              },
            }
          );
          if (res.status === 201) {
            cartDispatch({
              type: "ADD_TO_CART",
              payload: res?.data?.cart,
            });
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
    } else
      Toast({
        type: "error",
        message: "Please login to perform this action",
      });
  };

  const removeFromCart = async (product) => {
    try {
      const res = await axios.delete(`/api/user/cart/${product._id}`, {
        headers: {
          authorization: JSON.parse(localStorage.getItem("user-token")),
        },
      });
      if (res.status === 200) {
        cartDispatch({
          type: "REMOVE_FROM_CART",
          payload: res?.data?.cart,
        });
        Toast({
          type: "info",
          message: `${product.name} has been removed from cart`,
        });
      }
    } catch (e) {
      console.error(e);
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
        {
          headers: {
            authorization: JSON.parse(localStorage.getItem("user-token")),
          },
        }
      );
      if (res.status === 200) {
        cartDispatch({
          type: "INCREASE_QUANTITY",
          payload: res?.data?.cart,
        });
        Toast({
          type: "warning",
          message: `${product.name}'s quantity increased by 1`,
        });
      }
    } catch (e) {
      console.error(e);
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
          {
            headers: {
              authorization: JSON.parse(localStorage.getItem("user-token")),
            },
          }
        );
        if (res.status === 200) {
          cartDispatch({
            type: "INCREASE_QUANTITY",
            payload: res?.data?.cart,
          });
          Toast({
            type: "info",
            message: `${product.name}'s quantity decreased by 1`,
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  const placeOrder = () => {
    cartDispatch({
      type: "RESET",
    });
    Toast({
      type: "success",
      message: "Hurray!!! Your order has been placed",
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cartItems,
        cartSize: cartState.cartSize,
        total: cartState.cartTotalAmount,
        addToCart,
        removeFromCart,
        incrementQuantityOfItem,
        decrementQuantityOfItem,
        moveToWishlist,
        placeOrder,
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };

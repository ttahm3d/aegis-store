import { useContext, useEffect, useReducer, createContext } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../auth";
import { useWishlist } from "../wishlist/";
import { cartReducer } from "./Reducer";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_CART_ITEMS,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  RESET,
} from "./utils/constants";
import {
  addToCartHandler,
  decreaseItemQuantityHandler,
  getCartItemsHandler,
  increaseItemQuantityHandler,
  removeFromCartHandler,
} from "./utils/services";

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
          const res = await getCartItemsHandler();
          if (res.status === 200) {
            cartDispatch({
              type: GET_CART_ITEMS,
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
          const res = await addToCartHandler(product);
          if (res.status === 201) {
            cartDispatch({
              type: ADD_TO_CART,
              payload: res?.data?.cart,
            });
            toast.success(`${product.name} has been added to cart`);
          }
        } catch (e) {
          console.error(e);
          toast.error("Something went wrong. Please try again");
        }
      }
    } else toast.error("Please login to perform this action");
  };

  const removeFromCart = async (product) => {
    try {
      const res = await removeFromCartHandler(product);
      if (res.status === 200) {
        cartDispatch({
          type: REMOVE_FROM_CART,
          payload: res?.data?.cart,
        });
        toast.success(`${product.name} has been removed from cart`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const moveToWishlist = (product) => {
    removeFromCart(product);
    addToWishlist(product, "cart");
  };

  const incrementQuantityOfItem = async (product) => {
    try {
      const res = await increaseItemQuantityHandler(product?._id);
      if (res.status === 200) {
        cartDispatch({
          type: INCREASE_QUANTITY,
          payload: res?.data?.cart,
        });
        toast.success(`${product.name}'s quantity increased by 1`);
      }
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong. Try again after some time");
    }
  };

  const decrementQuantityOfItem = async (product) => {
    if (product.qty === 1) {
      removeFromCart(product);
    } else {
      try {
        const res = await decreaseItemQuantityHandler(product?._id);
        if (res.status === 200) {
          cartDispatch({
            type: DECREASE_QUANTITY,
            payload: res?.data?.cart,
          });
          toast(`${product.name}'s quantity decreased by 1`);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  const placeOrder = () => {
    cartDispatch({
      type: RESET,
    });
    toast.success("Hurray!!! Your order has been placed");
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

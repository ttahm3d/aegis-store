import axios from "axios";
import { useContext, useEffect, useReducer, createContext } from "react";
import { Toast } from "../../components";
import { useLocalStorage } from "../../hooks";
import { cartReducer } from "./Reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
  });
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
      } catch (e) {
        console.error(e);
      }
    })();
  });

  return (
    <CartContext.Provider value={{ cart: cartState.cart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };

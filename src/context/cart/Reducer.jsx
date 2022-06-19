import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_CART_ITEMS,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  RESET,
} from "./utils/constants";

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_CART_ITEMS:
    case ADD_TO_CART:
    case INCREASE_QUANTITY:
    case DECREASE_QUANTITY:
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: payload,
        cartSize: payload.reduce((acc, cur) => (acc += cur.qty), 0),
        cartTotalAmount: payload.reduce(
          (acc, cur) => (acc += cur.sellingPrice * cur.qty),
          0
        ),
      };
    case RESET:
      return {
        ...state,
        cartItems: [],
        cartSize: 0,
        cartTotalAmount: 0,
      };
    default:
      return state;
  }
};

export { cartReducer };

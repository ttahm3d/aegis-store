import Empty from "../../components/Empty/Empty";
import { useCart } from "../../context/cart";
import styles from "./Cart.module.css";

export default function () {
  const { cart } = useCart();

  return (
    <div className="main-container">
      <div className={styles.cart__container}>
        {cart.length === 0 ? (
          <Empty
            title={"Your Wishlist is empty"}
            message="Checkout the products and wishlist the ones you want !!"
          />
        ) : (
          <div className={styles.cart__cards}></div>
        )}
      </div>
    </div>
  );
}

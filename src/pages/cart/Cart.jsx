import Empty from "../../components/Empty/Empty";
import { useCart } from "../../context/cart";
import { useDocumentTitle } from "../../hooks";
import styles from "./Cart.module.css";
import CartCard from "./CartCard";
import Pricing from "./Pricing";

export default function () {
  const { cart } = useCart();

  useDocumentTitle("Cart | Aegis Store");

  return (
    <div className="main-container">
      <div className={styles.cart__container}>
        {cart.length === 0 ? (
          <Empty
            title={"Your cart is empty"}
            message="Checkout the products and them to cart!!"
          />
        ) : (
          <div className={styles.cart__cards__pricing__container}>
            <div className={styles.cart__cards__container}>
              {cart.map((product) => (
                <CartCard key={product._id} product={product} />
              ))}
            </div>
            <Pricing cart={cart} />
          </div>
        )}
      </div>
    </div>
  );
}

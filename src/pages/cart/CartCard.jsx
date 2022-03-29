import { useCart } from "../../context/cart";
import styles from "./Cart.module.css";

export default function ({ product }) {
  const { name, title, imageUrl, sellingPrice, actualPrice, discount, qty } =
    product;
  const {
    incrementQuantityOfItem,
    decrementQuantityOfItem,
    removeFromCart,
    moveToWishlist,
  } = useCart();

  return (
    <div className={`${styles.cart__card} shadow`}>
      <div className={styles.cart__image__container}>
        <img src={imageUrl} alt={title} className={styles.cart__image} />
      </div>
      <div className={styles.cart__description__container}>
        <div className={styles.cart__name}>{name}</div>
        <div className={styles.cart__price}>
          <div className={styles.cart__selling__price}>
            &#8377;{sellingPrice}
          </div>
          <div className={styles.cart__actual__price}>&#8377;{actualPrice}</div>
        </div>
        <div className={styles.cart__discount}>{discount} % off</div>
        <div className={styles.cart__quantity__container}>
          <button
            className={styles.cart__quantity__button}
            onClick={() => decrementQuantityOfItem(product)}>
            -
          </button>
          <div className={styles.cart__quantity}>{qty}</div>
          <button
            className={styles.cart__quantity__button}
            onClick={() => incrementQuantityOfItem(product)}>
            +
          </button>
        </div>
        <div className={styles.cart__buttons__container}>
          <button
            className="btn btn-primary"
            onClick={() => removeFromCart(product)}>
            Remove from Cart
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => moveToWishlist(product)}>
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

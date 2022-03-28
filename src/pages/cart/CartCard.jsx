import styles from "./Cart.module.css";

export default function ({ product }) {
  const { name, title, imageUrl, price, discount, qty } = product;

  const discountedPrice = Number(price) - Number(price) * (discount / 100);

  return (
    <div className={`${styles.cart__card} shadow`}>
      <div className={styles.cart__image__container}>
        <img src={imageUrl} alt={title} className={styles.cart__image} />
      </div>
      <div className={styles.cart__description__container}>
        <div className={styles.cart__name}>{name}</div>
        <div className={styles.cart__price}>
          <div className={styles.cart__selling__price}>
            &#8377;{discountedPrice}
          </div>
          <div className={styles.cart__actual__price}>&#8377;{price}</div>
        </div>
        <div className={styles.cart__discount}>{discount} % off</div>
        <div className={styles.cart__quantity__container}>
          <button className={styles.cart__quantity__button}>-</button>
          <div className={styles.cart__quantity}>{qty}</div>
          <button className={styles.cart__quantity__button}>+</button>
        </div>
        <div className={styles.cart__buttons__container}>
          <button className="btn btn-primary">Remove from Cart</button>
          <button className="btn btn-secondary">Move to Wishlist</button>
        </div>
      </div>
    </div>
  );
}

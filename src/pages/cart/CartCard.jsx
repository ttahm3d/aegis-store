import styles from "./Cart.module.css";

export default function ({ product }) {
  const { name, title, imgUrl, price, discount, quantity } = product;

  return (
    <div className={styles.cart__card}>
      <div className={styles.cart__image__container}>
        <img src={imgUrl} alt={title} className={styles.cart__image} />
      </div>
      <div className={styles.cart__description__container}>
        <div className={styles.cart__name}>{name}</div>
        <div className={styles.cart__price}>{price}</div>
      </div>
    </div>
  );
}

import styles from "./Wishlist.module.css";
import { WishlistButton } from "../../components";
import { useWishlist } from "../../context/wishlist";

export default function ({ wishlistItem }) {
  const { title, name, price, imageUrl } = wishlistItem;
  const { removeFromWishlist } = useWishlist();

  return (
    <div className={`card shadow ${styles.wishlist__card}`}>
      <div className="card-image-container">
        <img src={imageUrl} alt={title} className={styles.wishlist__image} />
      </div>
      <div className={`${styles.wishlist__description}`}>
        <div className={`${styles.wishlist__name}`}>{name}</div>
        <div className={`${styles.wishlist__price}`}>&#8377;{price}</div>
        <div className={`${styles.wishlist__buttons__container}`}>
          <button className="btn btn-primary">Move to Cart</button>
          <button
            className="btn btn-seconday"
            onClick={() => removeFromWishlist(wishlistItem)}>
            Remove from wishlist
          </button>
        </div>
      </div>
      <div className={styles.wishlist__btn}>
        <WishlistButton
          wishlisted={1}
          onClick={() => removeFromWishlist(wishlistItem)}
        />
      </div>
    </div>
  );
}

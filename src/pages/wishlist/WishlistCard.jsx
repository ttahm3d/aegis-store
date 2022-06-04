import styles from "./Wishlist.module.css";
import { WishlistButton } from "../../components";
import { useWishlist } from "../../context/wishlist";
import { useCart } from "../../context/cart";

export default function ({ wishlistItem }) {
  const { title, name, sellingPrice, imageUrl, count } = wishlistItem;
  const { removeFromWishlist } = useWishlist();

  const { addToCart } = useCart();

  return (
    <div className={`card shadow ${styles.wishlist__card}`}>
      <div className="card-image-container">
        <img src={imageUrl} alt={title} className={styles.wishlist__image} />
      </div>
      <div className={`${styles.wishlist__description}`}>
        <div className={`${styles.wishlist__name}`}>{name}</div>
        <div className={`${styles.wishlist__price}`}>&#8377;{sellingPrice}</div>
        <div className={`${styles.wishlist__buttons__container}`}>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(wishlistItem)}>
            Move to Cart
          </button>
          <button
            className="btn btn-secondary"
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
      {count === 0 ? (
        <div className={styles.wishlist__card__overlay}>
          <div className={styles.wishlist__card__overlay__outofstock}>
            <>Out of Stock</>
          </div>
        </div>
      ) : null}
    </div>
  );
}

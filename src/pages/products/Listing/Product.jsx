import { WishlistButton } from "../../../components";
import { FaRunning } from "react-icons/fa";
import Rating from "../../../components/Rating/Rating";
import styles from "./Listing.module.css";
import { useWishlist } from "../../../context/wishlist";
import { useCart } from "../../../context/cart";

export default function ({ product }) {
  const {
    _id,
    title,
    name,
    sellingPrice,
    actualPrice,
    imageUrl,
    discount,
    aegisAssured,
    count,
    rating,
  } = product;
  const { wishlist, addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  const wishlisted = wishlist.some((item) => item._id === product._id);

  return (
    <div className={`card shadow ${styles.product__card}`}>
      <div className={`flex flex-center ${styles.image__container}`}>
        <img
          src={imageUrl}
          className={`${styles.product__image}`}
          alt={title}
        />
      </div>
      <div className={`${styles.product__info}`}>
        <div className={`${styles.product__name}`}>{name}</div>
        <div className={styles.product__rating__assurance}>
          <div className={`${styles.product__assurance}`}>
            {aegisAssured ? (
              <>
                <FaRunning /> Fast delivery
              </>
            ) : null}
          </div>
          <Rating rating={rating} />
        </div>
        <div className={`${styles.product__pricing}`}>
          <div className={`${styles.product__selling__price}`}>
            &#8377;&nbsp;{sellingPrice}
          </div>
          <div className={`${styles.product__actual__price}`}>
            &#8377;&nbsp;{actualPrice}
          </div>
        </div>
        <div>
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary wd-100">
            Add to Cart
          </button>
        </div>
      </div>
      {count === 0 ? (
        <div className={styles.product__overlay}>
          <div className={styles.product__overlay__outofstock}>
            <>Out of Stock</>
          </div>
        </div>
      ) : null}
      <div className={styles.wishlist__btn}>
        <WishlistButton
          onClick={() => addToWishlist(product, "product")}
          wishlisted={wishlisted ? 1 : 0}
        />
      </div>
    </div>
  );
}

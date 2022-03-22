import { WishlistButton } from "../../../components";
import { FaRunning } from "react-icons/fa";
import Rating from "../../../components/Rating/Rating";
import styles from "./Listing.module.css";

export default function (props) {
  const {
    title,
    name,
    price,
    imageUrl,
    discount,
    aegisAssured,
    count,
    rating,
  } = props;

  const discountedPrice = Number(price) - Number(price) * (discount / 100);

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
            &#8377;&nbsp;{discountedPrice.toFixed(2)}
          </div>
          <div className={`${styles.product__actual__price}`}>
            &#8377;&nbsp;{Number(price).toFixed(2)}
          </div>
        </div>
        <div>
          <button className="btn btn-primary wd-100">Add to Cart</button>
        </div>
      </div>
      {count === 0 ? (
        <div className={styles.product__overlay}>
          <div className={styles.product__overlay__outofstock}>
            <>Out of Stock</>
          </div>
        </div>
      ) : null}
      <div className={styles.wishlist__container}>
        <WishlistButton />
      </div>
    </div>
  );
}

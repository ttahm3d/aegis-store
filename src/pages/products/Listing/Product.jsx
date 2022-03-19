import { PrimaryButton } from "../../../components";
import styles from "./Listing.module.css";

export default function (props) {
  const {
    _id,
    title,
    name,
    size,
    price,
    imageUrl,
    discount,
    aegisAssured,
    count,
    categoryName,
  } = props;

  const discountedPrice = Number(price) - Number(price) * (discount / 100);

  return (
    <div className={`card shadow`}>
      <div className={`flex flex-center ${styles.image__container}`}>
        <img
          src={imageUrl}
          className={`${styles.product__image}`}
          alt={title}
        />
      </div>
      <div className={`${styles.product__info}`}>
        <div className={`${styles.product__name}`}>{name}</div>
        <div className={`${styles.product__assurance}`}>
          {aegisAssured
            ? "Assured Fast Delivery"
            : "There may be delay in delivery"}
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
    </div>
  );
}

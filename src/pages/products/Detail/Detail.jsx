import { useParams } from "react-router-dom";
import { useProducts } from "../../../context/products/Context";
import { getProductById } from "./Util";
import styles from "./Detail.module.css";
import { Rating } from "../../../components";
import { useCart } from "../../../context/cart";

export default function () {
  const { productId } = useParams();
  const { products } = useProducts();

  const { addToCart } = useCart();

  const product = getProductById(productId, products);

  return (
    <div className="main-container">
      <div className={styles.details__wrapper}>
        <div className={styles.image__container}>
          <img src={product?.imageUrl} alt={product?.title} />
        </div>
        <div className={styles.information__container}>
          <div className={styles.name}>{product?.name}</div>
          <div className={styles.description}>{product?.description}</div>
          <div className="flex flex-gap-2 align-base m-y-2">
            <div className={styles.selling__price}>
              &#8377; {product?.sellingPrice}
            </div>
            <div className={styles.actual__price}>
              &#8377; {product?.actualPrice}
            </div>
          </div>
          <div className="flex flex-gap-2 align-base">
            <div className={styles.discount}>{product?.discount} %</div>
            <Rating rating={product?.rating} />
          </div>
          <div className="m-y-2">
            <div>
              {product?.features?.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div
              className="btn btn-primary wd-100"
              onClick={() => addToCart(product)}>
              Add To Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

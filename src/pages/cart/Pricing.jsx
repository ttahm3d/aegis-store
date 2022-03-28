import { useCart } from "../../context/cart";
import styles from "./Cart.module.css";

export default function () {
  const { cart } = useCart();

  const testCart = [
    {
      _id: "cf790f0f-68d8-44ba-aa13-70bb729bf853",
      title: "og-jersey",
      name: "OG Jersey",
      price: "6499",
      imageUrl:
        "https://res.cloudinary.com/dut75albw/image/upload/v1647682043/AegisStore/products/jerseys/OGJersey_ac9bti.webp",
      aegisAssured: true,
      discount: "16",
      rating: 4.2,
      count: 45,
      categoryName: "jersey",
      id: "1",
      createdAt: "2022-03-28T16:54:43+05:30",
      updatedAt: "2022-03-28T16:54:43+05:30",
      qty: 1,
    },
    {
      _id: "b4738826-99da-49c2-8815-b825d3f3f1ef",
      title: "nigma-jersey",
      name: "Nigma Jersey",
      price: "5999",
      imageUrl:
        "https://res.cloudinary.com/dut75albw/image/upload/v1647682043/AegisStore/products/jerseys/NigmaJersey_frzs49.webp",
      aegisAssured: true,
      discount: "16",
      rating: 3.8,
      count: 24,
      categoryName: "jersey",
      id: "2",
      createdAt: "2022-03-28T16:54:44+05:30",
      updatedAt: "2022-03-28T16:54:47+05:30",
      qty: 2,
    },
  ];

  return (
    <div className={`${styles.pricing__container} shadow`}>
      <div className={styles.pricing__heading}>Pricing</div>
      <div className={styles.pricing__items}>
        {testCart.map((cartItem) => (
          <div key={cartItem._id} className={styles.pricing__item}>
            <div className={styles.pricing__item__name}>{cartItem.name}</div>
            <div className={styles.pricing__prices}>
              <div>{cartItem.qty}</div>
              <div className={styles.pricing__selling__price}>
                &#8377;
                {Number(cartItem.price) -
                  Number(cartItem.price) * (cartItem.discount / 100).toFixed(2)}
              </div>
              <div className={styles.pricing__actual__price}>
                &#8377;{Number(cartItem.price).toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pricing__shipping}>
        <div className={styles.pricing__item__name}>Shipping Charges</div>
        <div className={styles.pricing__price}>&#8377; 1500</div>
      </div>
      <div className={styles.pricing__discount}>
        <div className={styles.pricing__item__name}>Discount</div>
        <div className={styles.pricing__price}>&#8377;</div>
      </div>
      <div className={styles.pricing__total}>
        <div className={styles.pricing__total__name}>Total</div>
        <div className={styles.pricing__price}>&#8377;</div>
      </div>
      <div className="flex flex-column">
        <button className="btn btn-accent">Place Order</button>
      </div>
    </div>
  );
}

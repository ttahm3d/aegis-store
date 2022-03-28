import Empty from "../../components/Empty/Empty";
import { useCart } from "../../context/cart";
import styles from "./Cart.module.css";
import CartCard from "./CartCard";

export default function () {
  // const { cart } = useCart();

  const test = [
    {
      _id: "a7599de4-5c41-4bc2-88a6-7383535e600c",
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
      createdAt: "2022-03-28T13:03:27+05:30",
      updatedAt: "2022-03-28T13:03:27+05:30",
      qty: 1,
    },
    {
      _id: "6b7fe4f3-e9b7-4743-bbad-c89f3d5a9ec4",
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
      createdAt: "2022-03-28T13:03:44+05:30",
      updatedAt: "2022-03-28T13:03:44+05:30",
      qty: 1,
    },
  ];

  return (
    <div className="main-container">
      <div className={styles.cart__container}>
        {/* {cart.length === 0 ? (
          <Empty
            title={"Your Wishlist is empty"}
            message="Checkout the products and wishlist the ones you want !!"
          />
        ) : ( */}
        <div className={styles.cart__cards__pricing__container}>
          <div className={styles.cart__cards__container}>
            {test.map((product) => (
              <CartCard key={product._id} product={product} />
            ))}
          </div>
          <div>pricing</div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styles from "./WishlistButton.module.css";

// expects a boolean prop that can be controlled outside component

export default function (props) {
  const { wishlisted } = props;

  return (
    <div
      {...props}
      className={styles.wishlist__circle}
      style={{
        backgroundColor: wishlisted === "true" && "hsla(var(--red-300))",
      }}>
      {wishlisted === "true" ? (
        <AiFillHeart fill="red" />
      ) : (
        <AiOutlineHeart fill="hsla(var(--red-500), 0.45)" />
      )}
    </div>
  );
}

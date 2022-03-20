import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styles from "./WishlistButton.module.css";

// expects a boolean prop that can be controlled outside component

export default function (props) {
  const { isWishlisted } = props;

  return (
    <div
      {...props}
      className={styles.wishlist__circle}
      style={{ backgroundColor: isWishlisted && "hsla(var(--red-300))" }}>
      {isWishlisted ? (
        <AiFillHeart fill="red" />
      ) : (
        <AiOutlineHeart stroke="red" />
      )}
    </div>
  );
}

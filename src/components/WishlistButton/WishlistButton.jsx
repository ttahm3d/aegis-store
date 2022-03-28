import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styles from "./WishlistButton.module.css";

export default function (props) {
  const { wishlisted } = props;

  return (
    <div
      {...props}
      className={styles.wishlist__circle}
      style={{
        backgroundColor: wishlisted === 1 && "hsla(var(--red-300))",
      }}>
      {wishlisted === 1 ? (
        <AiFillHeart fill="red" />
      ) : (
        <AiOutlineHeart fill="hsla(var(--red-500), 0.45)" />
      )}
    </div>
  );
}

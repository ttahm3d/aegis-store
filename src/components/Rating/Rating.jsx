import styles from "./Rating.module.css";
import { AiFillStar } from "react-icons/ai";

export default function ({ rating }) {
  const ratingColor = () => {
    if (rating >= 2 && rating < 3) {
      return {
        backgroundColor: "hsla(var(--red-500), 0.7)",
        color: "var(--pure-white)",
      };
    } else if (rating >= 3 && rating < 4) {
      return {
        backgroundColor: "hsl(var(--accent-light))",
        color: "var(--pure-black)",
      };
    } else if (rating >= 4) {
      return {
        backgroundColor: "hsl(var(--green-500))",
        color: "var(--pure-white)",
      };
    }
  };

  return (
    <div className={styles.rating} style={ratingColor()}>
      {rating}&nbsp;
      <AiFillStar />
    </div>
  );
}

import styles from "./Rating.module.css";
import { AiFillStar } from "react-icons/ai";

export default function ({ rating }) {
  return (
    <div className={styles.rating}>
      {rating}&nbsp;
      <AiFillStar />
    </div>
  );
}

import { Link } from "react-router-dom";
import styles from "./Empty.module.css";
import Empty from "../../assets/Empty.svg";

export default function ({ title, message }) {
  return (
    <div className={styles.container}>
      <div>
        <img src={Empty} alt="empty" />
      </div>
      <div className="heading-3">
        <strong>{title}</strong>
      </div>
      <div className="light">{message}</div>
      <Link to="/products" className="btn btn-primary">
        Products
      </Link>
    </div>
  );
}

import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div
      className="flex main-container flex-center flex-column"
      style={{ minHeight: "80vh" }}>
      <div className="flex flex-gap-2 heading-3">
        <div className="error-code">404</div>
        <div className="error-message">Page Not Found</div>
      </div>
      <div className="flex align-base">
        Go back to&nbsp;
        <Link className={styles.link} to="/">
          Home
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/AegisStore.svg";

export default function () {
  return (
    <header className={`${styles.header} shadow`}>
      <div className="main-container">
        <nav
          className={`${styles.navbar} flex align-center flex-gap-2 reducegap`}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="nav-items flex align-center flex-gap-1">
            <ul className="nav-list flex align-center style-none flex-gap-1">
              <li className="nav-list-item">
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="nav-list-item">
                <a className="btn btn-accent" href="login.html">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

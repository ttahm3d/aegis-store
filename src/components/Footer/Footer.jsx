import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/AegisStore.svg";

export default function () {
  return (
    <footer className={`shadow ${styles.footer}`}>
      <div className="main-container">
        <div className={styles.footer__container}>
          <div className="logo-container">
            <img src={Logo} alt="logo" />
          </div>
          <div className="links-container">
            <div className={styles.links__heading}>Quick Links</div>
            <ul className={`${styles.list}`}>
              <li className={styles.list__item}>
                <Link to="/products">Products</Link>
              </li>
              <li className={styles.list__item}>
                <Link to="/cart">Cart</Link>
              </li>
              <li className={styles.list__item}>
                <Link to="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </div>
          <div className="links-container">
            <div className={styles.links__heading}>Connect with me</div>
            <ul className={`${styles.list}`}>
              <li className={styles.list__item}>
                <a href="#" target="_blank" rel="noreferrer ">
                  Personal Website
                </a>
              </li>
              <li className={styles.list__item}>
                <a href="#" target="_blank" rel="noreferrer ">
                  Blog
                </a>
              </li>
              <li className={styles.list__item}>
                <a href="#" target="_blank" rel="noreferrer ">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

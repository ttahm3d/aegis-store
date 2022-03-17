import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";
import styled from "styled-components";
import { IoMdMoon } from "react-icons/io";
import { FiSun } from "react-icons/fi";

export default function ({ toggleTheme }) {
  const [theme] = useLocalStorage("theme");

  return (
    <header className={`${styles.header} shadow`}>
      <div className="container">
        <nav
          className={`${styles.navbar} flex align-center flex-gap-2 reducegap`}>
          <div className={styles.logo}>
            <Link to="/">
              <h2>Aegis Store</h2>
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
            <button className="btnToggle" onClick={() => toggleTheme()}>
              {theme === "light" ? <FiSun /> : <IoMdMoon />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

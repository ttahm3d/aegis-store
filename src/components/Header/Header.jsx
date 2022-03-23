import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import styles from "./Header.module.css";
import Logo from "../../assets/AegisStore.svg";
import { useScreenWidth } from "../../hooks/";
import { useAuth } from "../../context/auth";

export default function () {
  const [showSidebar, setShowSidebar] = useState(false);
  const [width] = useScreenWidth();
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const closeSidebar = () => setShowSidebar(false);

  const handleLogout = () => {
    authDispatch({
      type: "LOGOUT",
    });
    try {
      localStorage.removeItem("user-token");
    } catch (e) {
      console.error("Could not logout!!");
    }
    navigate("/");
  };

  return (
    <header className={`${styles.header}`}>
      <div className="main-container">
        <nav className={styles.navbar}>
          <div
            className={styles.menu}
            onClick={() => setShowSidebar((s) => !s)}>
            <AiOutlineMenu />
          </div>
          <div className={styles.logo}>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className={styles.navitems}>
            <ul
              className={styles.navlist}
              style={{
                transform:
                  showSidebar || width >= 560
                    ? "translateX(0%)"
                    : "translateX(-100%)",
              }}>
              <li className="nav-list-item">
                <Link to="/products" onClick={() => closeSidebar()}>
                  Products
                </Link>
              </li>
              <li className="nav-list-item">
                <Link to="/wishlist" onClick={() => closeSidebar()}>
                  Wishlist
                </Link>
              </li>
              <li className="nav-list-item">
                <Link to="/cart" onClick={() => closeSidebar()}>
                  Cart
                </Link>
              </li>
              {authState?.isLoggedIn ? (
                <li
                  onClick={() => setShowDropdown((s) => !s)}
                  className={styles.usermenu}>
                  <div className={styles.avatar}>
                    <AiOutlineUser size={30} />
                  </div>
                  <ul
                    style={{ display: showDropdown ? "block" : "none" }}
                    className={styles.dropdown}>
                    <li>
                      <Link to="/user">Profile</Link>
                    </li>
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                </li>
              ) : (
                <li className="nav-list-item">
                  <Link
                    className="btn btn-accent"
                    to="/auth/login"
                    onClick={() => closeSidebar()}>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

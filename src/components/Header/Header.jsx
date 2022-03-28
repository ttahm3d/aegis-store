import { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import styles from "./Header.module.css";
import Logo from "../../assets/AegisStore.svg";
import { useScreenWidth } from "../../hooks/";
import { useAuth } from "../../context/auth";

export default function () {
  const [showSidebar, setShowSidebar] = useState(false);
  const [width] = useScreenWidth();
  const navigate = useNavigate();
  const { authState, handleUserLogout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const closeSidebar = () => setShowSidebar(false);

  const handleLogout = () => {
    handleUserLogout();
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
                  showSidebar || width >= 720
                    ? "translateX(0%)"
                    : "translateX(-100%)",
              }}>
              <li className="nav-list-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "header-active" : "header-inactive"
                  }
                  onClick={() => closeSidebar()}>
                  Products
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink
                  to="/wishlist"
                  className={({ isActive }) =>
                    isActive ? "header-active" : "header-inactive"
                  }
                  onClick={() => closeSidebar()}>
                  Wishlist
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive ? "header-active" : "header-inactive"
                  }
                  onClick={() => closeSidebar()}>
                  Cart
                </NavLink>
              </li>
              {authState?.isLoggedIn ? (
                <li
                  onClick={() => setShowDropdown((s) => !s)}
                  className={styles.usermenu}>
                  {authState?.user.firstName} {authState?.user.lastName}&nbsp;
                  <AiOutlineUser size={20} />
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

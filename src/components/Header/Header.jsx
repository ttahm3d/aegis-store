import { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import {
  AiOutlineMenu,
  AiFillShop,
  AiFillHeart,
  AiFillShopping,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import styles from "./Header.module.css";
import Logo from "../../assets/AegisStore.svg";
import { useScreenWidth } from "../../hooks/";
import { useAuth } from "../../context/auth";
import { useCart } from "../../context/cart";
import { useWishlist } from "../../context/wishlist";
import Badge from "../Badge/Badge";

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

  const { cartSize } = useCart();
  const { wishlistSize } = useWishlist();

  const navbarItems = [
    {
      id: "1",
      icon: <AiFillShop />,
      text: "Products",
      count: null,
      pathToNavigate: "/products",
    },
    {
      id: "2",
      icon: <AiFillHeart />,
      text: "Wishlist",
      count: wishlistSize,
      pathToNavigate: "/wishlist",
    },
    {
      id: "3",
      icon: <AiFillShopping />,
      text: "Cart",
      count: cartSize,
      pathToNavigate: "/cart",
    },
  ];

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
              {navbarItems.map((navItem) => (
                <li className="nav-list-item" key={navItem.id}>
                  <NavLink
                    to={navItem.pathToNavigate}
                    className={({ isActive }) =>
                      isActive ? "header-active" : "header-inactive"
                    }
                    onClick={() => closeSidebar()}>
                    <Badge
                      icon={navItem.icon}
                      text={navItem.text}
                      number={navItem.count}
                    />
                  </NavLink>
                </li>
              ))}
              {authState?.isLoggedIn ? (
                <li
                  onClick={() => setShowDropdown((s) => !s)}
                  className={styles.usermenu}>
                  <Badge
                    icon={<FaUserCircle />}
                    text={`${authState?.user.firstName}`}
                    number={null}
                  />
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

import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { RiLinkedinFill, RiGithubLine, RiTwitterLine } from "react-icons/ri";
import Logo from "../../assets/AegisStore.svg";

const extLinks = [
  {
    id: 1,
    name: "Github",
    icon: <RiGithubLine />,
    path: "https://github.com/ttahm3d",
  },
  {
    id: 2,
    name: "Linked In",
    icon: <RiLinkedinFill />,
    path: "https://www.linkedin.com/in/tahirahmedt/",
  },
  {
    id: 3,
    name: "Twitter",
    icon: <RiTwitterLine />,
    path: "https://twitter.com/ttahm3d",
  },
];
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
            <div className={styles.links__heading}>Other links</div>
            <ul className={`${styles.list}`}>
              <li className={styles.list__item}>
                <a href="#" target="_blank" rel="noreferrer noopener">
                  Terms of service
                </a>
              </li>
              <li className={styles.list__item}>
                <a href="#" target="_blank" rel="noreferrer noopener">
                  Return policy
                </a>
              </li>
              <li className={styles.list__item}>
                <a href="#" target="_blank" rel="noreferrer noopener">
                  Aegis Assured
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-center p-y-2 bold align-base heading-5">
        &copy; {new Date().getFullYear()}&nbsp;&nbsp;&nbsp;
        <a
          href="https://tahirahmedt.com"
          target="_blank"
          rel="noreferrer noopener">
          Tahir Ahmed T
        </a>
      </div>
      <div className="flex flex-gap-2 flex-center">
        {extLinks.map((ext) => (
          <a key={ext.id} href={ext.path} className="heading-5">
            {ext.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

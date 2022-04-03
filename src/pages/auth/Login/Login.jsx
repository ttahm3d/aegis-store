import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import styles from "./Login.module.css";
import { useAuth } from "../../../context/auth";
import { useDocumentTitle } from "../../../hooks";

export default function () {
  useDocumentTitle("Login | Aegis Store");

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const location = useLocation();
  const path = location.state?.from?.pathname || "/";
  console.log(path);
  const { handleUserLogin } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserLogin(loginForm, path);
    setLoginForm((loginForm) => ({
      ...loginForm,
      email: "",
      password: "",
    }));
  };

  const loginWithTestCreds = async () => {
    handleUserLogin(
      {
        email: "tahirahmedt97@gmail.com",
        password: "kolaveridha",
      },
      path
    );
    setLoginForm((loginForm) => ({
      ...loginForm,
      email: "",
      password: "",
    }));
  };

  return (
    <div className="main-container">
      <div className={styles.form__container}>
        <div className={styles.form__title}>Login</div>
        <form className={styles.form__wrapper} onSubmit={handleSubmit}>
          <div className={styles.form__item}>
            <label htmlFor="email" className={styles.form__label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
              required
              className={styles.form__input}
            />
          </div>
          <div className={styles.form__item}>
            <label htmlFor="password" className={styles.form__label}>
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginForm.password}
              required
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              className={styles.form__input}
            />
          </div>
          <div className={styles.form__item}>
            <button className="btn btn-primary" style={{ marginTop: "1rem" }}>
              Login
            </button>
          </div>
        </form>
        <div className="flex flex-center flex-column flex-wrap align-center">
          <button
            className="btn btn-secondary"
            style={{ marginTop: "1rem" }}
            onClick={loginWithTestCreds}>
            Login with Test Creds
          </button>
          <span className="fg-lighter">Don't have an account ?</span>
          <Link className="link link-primary" to="/auth/signup">
            Create a new Account
          </Link>
        </div>
      </div>
    </div>
  );
}

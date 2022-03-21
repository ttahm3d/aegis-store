import { useState } from "react";
import styles from "./Login.module.css";

export default function () {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="main-container">
      <div className={styles.form__container}>
        <div className={styles.form__title}>Login</div>
        <form className={styles.form__wrapper}>
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
      </div>
    </div>
  );
}

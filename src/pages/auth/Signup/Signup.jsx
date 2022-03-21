import { useState } from "react";
import styles from "./Signup.module.css";

export default function () {
  const [signupForm, setSignupForm] = useState({
    fullName: "",
    email: "",
    password: "",
    contact: "",
  });

  return (
    <div className="main-container">
      <div className={styles.form__container}>
        <div className={styles.form__title}>Login</div>
        <form className={styles.form__wrapper}>
          <div className={styles.form__item}>
            <label htmlFor="full_name" className={styles.form__label}>
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              id="full_name"
              value={signupForm.fullName}
              onChange={(e) =>
                setSignupForm({ ...signupForm, fullName: e.target.value })
              }
              className={styles.form__input}
            />
          </div>
          <div className={styles.form__item}>
            <label htmlFor="email" className={styles.form__label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={signupForm.email}
              onChange={(e) =>
                setSignupForm({ ...signupForm, email: e.target.value })
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
              value={signupForm.password}
              onChange={(e) =>
                setSignupForm({ ...signupForm, password: e.target.value })
              }
              className={styles.form__input}
            />
          </div>
          <div className={styles.form__item}>
            <label htmlFor="contact" className={styles.form__label}>
              Contact Number
            </label>
            <input
              type="text"
              name="contact"
              id="contact"
              value={signupForm.contact}
              onChange={(e) =>
                setSignupForm({ ...signupForm, contact: e.target.value })
              }
              className={styles.form__input}
            />
          </div>
          <div className={styles.form__item}>
            <button className="btn btn-primary" style={{ marginTop: "1rem" }}>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

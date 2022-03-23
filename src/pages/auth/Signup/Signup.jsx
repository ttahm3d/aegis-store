import { useState } from "react";
import styles from "./Signup.module.css";

export default function () {
  const [signupForm, setSignupForm] = useState({
    fullName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contact: "",
  });

  return (
    <div className="main-container">
      <div className={styles.form__container}>
        <div className={styles.form__title}>Signup</div>
        <form className={styles.form__wrapper}>
          <div className={styles.form__item}>
            <label htmlFor="full_name" className={styles.form__label}>
              Full Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={signupForm.firstName}
              onChange={(e) =>
                setSignupForm({ ...signupForm, firstName: e.target.value })
              }
              className={styles.form__input}
            />
          </div>
          <div className={styles.form__item}>
            <label htmlFor="full_name" className={styles.form__label}>
              Full Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={signupForm.lastName}
              onChange={(e) =>
                setSignupForm({ ...signupForm, lastName: e.target.value })
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

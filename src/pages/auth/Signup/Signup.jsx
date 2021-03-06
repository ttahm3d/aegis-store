import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useAuth } from "../../../context/auth";
import styles from "./Signup.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../../hooks";

export default function () {
  useDocumentTitle("Signup | Aeigs Store");

  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contact: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { handleUserSignup } = useAuth();
  const location = useLocation();
  const path = location.state?.from?.pathname || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleUserSignup(signupForm, path);
    setSignupForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      contact: "",
    });
    navigate("/products");
  };

  const toggleShowPassword = () => {
    setShowPassword((s) => !s);
  };

  return (
    <div className="main-container">
      <div className={styles.form__container}>
        <div className={styles.form__title}>Signup</div>
        <form className={styles.form__wrapper} onSubmit={handleSubmit}>
          <div className={styles.form__item}>
            <label htmlFor="full_name" className={styles.form__label}>
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              aria-required
              value={signupForm.firstName}
              onChange={(e) =>
                setSignupForm({ ...signupForm, firstName: e.target.value })
              }
              className={styles.form__input}
            />
          </div>
          <div className={styles.form__item}>
            <label htmlFor="full_name" className={styles.form__label}>
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              aria-required
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
              required
              aria-required
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
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              required
              aria-required
              value={signupForm.password}
              onChange={(e) =>
                setSignupForm({ ...signupForm, password: e.target.value })
              }
              className={styles.form__input}
            />
            <button
              className={styles.show__button}
              onClick={toggleShowPassword}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <div className={styles.form__item}>
            <label htmlFor="contact" className={styles.form__label}>
              Contact Number
            </label>
            <input
              type="text"
              name="contact"
              id="contact"
              required
              aria-required
              minLength={10}
              maxLength={10}
              value={signupForm.contact}
              onChange={(e) =>
                setSignupForm({
                  ...signupForm,
                  contact: e.target.value.trim().replace(/[^0-9]/g, ""),
                })
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

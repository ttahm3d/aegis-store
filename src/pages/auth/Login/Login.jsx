import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useLocalStorage } from "../../../hooks";
import { useAuth } from "../../../context/auth";

export default function () {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [_, setUserToken] = useLocalStorage("user-token");
  const { authState, authDispatch } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/api/auth/login", loginForm);
    setUserToken(data.encodedToken);
    authDispatch({
      type: "LOGIN",
      payload: data?.user,
    });
    setLoginForm((loginForm) => ({
      ...loginForm,
      email: "",
      password: "",
    }));
    navigate("/products");
  };

  console.log(authState);

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
        <div className="flex flex-center flex-wrap align-center">
          <span className="fg-lighter">Don't have an account ?</span>
          <Link className="link link-primary" to="/auth/signup">
            Create a new Account
          </Link>
        </div>
      </div>
    </div>
  );
}

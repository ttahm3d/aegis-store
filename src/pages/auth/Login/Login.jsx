import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useLocalStorage } from "../../../hooks";

export default function () {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  // const [value, setValue] = useLocalStorage("token-1");
  const [token, setToken] = useLocalStorage("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/api/auth/login", {
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    });

    const { user, encodedToken } = data;
    setToken(encodedToken);
    // setValue("token-2", "newvalue");
    // axios
    //   .post("/api/auth/login", {
    //     email: "adarshbalika@gmail.com",
    //     password: "adarshbalika",
    //   })
    //   .then((res) => console.log(res))
    //   .catch((e) => console.error(e));
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

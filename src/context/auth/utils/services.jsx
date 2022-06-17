import axios from "axios";

const loginHandler = (loginForm) => axios.post("/api/auth/login", loginForm);

const signupHandler = (signupForm) =>
  axios.post("/api/auth/signup", signupForm);

export { loginHandler, signupHandler };

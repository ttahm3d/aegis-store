import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useLocalStorage } from "../../hooks";
import { toast } from "react-hot-toast";
import { authReducer } from "./Reducer";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useLocalStorage("user-token");
  const [userData, setUserData] = useLocalStorage("user-data");
  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: userToken,
    user: userData,
  });

  const navigate = useNavigate();

  const handleUserLogin = async (loginForm, path) => {
    try {
      const response = await axios.post("/api/auth/login", loginForm);
      if (response.status === 200) {
        setUserToken(response?.data.encodedToken);
        setUserData(response?.data?.user);
        toast.success("Login Successful");
        authDispatch({
          type: "LOGIN",
          payload: response?.data?.user,
        });
      }
      navigate(path, { replace: true });
    } catch (e) {
      console.error(e);
      toast.error("Invalid credentials. Email and Password don't match");
    }
  };

  const handleUserLogout = async () => {
    authDispatch({
      type: "LOGOUT",
    });
    try {
      localStorage.removeItem("user-token");
      localStorage.removeItem("user-data");
      toast.success("Logout Successful");
    } catch (e) {
      toast.error("Could not log you out. Please try again.");
    }
  };

  const handleUserSignup = async (signupForm, path) => {
    try {
      const { status, data } = await axios.post("/api/auth/signup", signupForm);
      if (status === 201) {
        setUserToken(data.encodedToken);
        setUserData(data?.user);
        authDispatch({
          type: "SIGNUP",
          payload: data?.user,
        });
        toast.success("Welcome!! You have successsfully signed up.");
        navigate(path, { replace: true });
      }
    } catch (e) {
      console.error(e);
      toast.error("There was an issue in signup. Please try again");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        isLoggedIn: authState.isLoggedIn,
        handleUserLogin,
        handleUserLogout,
        handleUserSignup,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };

import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useLocalStorage } from "../../hooks";
import { authReducer, useState } from "./Reducer";
import { Toast } from "../../components";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useLocalStorage("user-token");
  const [userData, setUserData] = useLocalStorage("user-data");
  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: userToken,
    user: userData,
  });

  const handleUserLogin = async (loginForm) => {
    try {
      const response = await axios.post("/api/auth/login", loginForm);
      if (response.status === 200) {
        Toast({ message: "You have successsfully logged in", type: "success" });
        setUserToken(response?.data.encodedToken);
        setUserData(response?.data?.user);
        authDispatch({
          type: "LOGIN",
          payload: response?.data?.user,
        });
      }
    } catch (e) {
      console.error(e);
      Toast({
        message: "Invalid credentials. Please try again.",
        type: "error",
      });
    }
  };

  const handleUserLogout = async () => {
    authDispatch({
      type: "LOGOUT",
    });
    try {
      localStorage.removeItem("user-token");
      localStorage.removeItem("user-data");
      Toast({ message: "Logout successful!!", type: "success" });
    } catch (e) {
      Toast({
        message: "Could not log you out. Please try again.",
        type: "error",
      });
    }
  };

  const handleUserSignup = async (signupForm) => {
    try {
      const { status, data } = await axios.post("/api/auth/signup", signupForm);
      if (status === 201) {
        setUserToken(data.encodedToken);
        setUserData(data?.user);
        authDispatch({
          type: "SIGNUP",
          payload: data?.user,
        });
        Toast({
          message: "Welcome!! You have successsfully signed up.",
          type: "success",
        });
        navigate("/");
      }
    } catch (e) {
      Toast({
        message: "There was an issue in signup. Please try again",
        type: "error",
      });
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

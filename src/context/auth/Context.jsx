import { createContext, useContext, useReducer } from "react";
import { authReducer } from "./Reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    user: {},
  });

  console.log(authState);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };

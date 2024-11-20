import React from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
const context = createContext(null);
export const AppContext = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    checkAuth();
  }, []);
  const checkAuth = () => {
    let token = localStorage.getItem("token");
    if (token) {
      return { children };
    } else {
      navigate("/");
    }
  };
  return <context.Provider value="">{children}</context.Provider>;
};

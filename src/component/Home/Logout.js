import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios.post("https://localhost:7093/api/User/logoutUser").then(() => {
      localStorage.clear();

      navigate("/");
    });
  }, []);
  return <div>Logout</div>;
};

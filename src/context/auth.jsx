import React, { useState, createContext } from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvicer = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const login = (email, password) => {
    console.log("login auth", { email, password });

    if (password === "123") {
      setUser({ id: "123", email });
      navigate("/");
    }

    setUser({ id: "123", email }); //usuario temporario
  };

  const logout = () => {
    console.log("logout");
  };
  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvicer;

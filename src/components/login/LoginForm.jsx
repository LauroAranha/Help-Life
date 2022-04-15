import React, { useState, useContext } from "react";

import { AuthContext } from "../../context/auth";
import "./LoginForm.css";

const LoginForm = () => {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });

    login(email, password); //integração com o contexto e API
  };

  return (
    <div>
      <div id="login" className="box">
        <form className="form" onSubmit={handleSubmit}>
          <p>(teste de autenticação):{String(authenticated)}</p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Login</button>

          <span>
            Não tem uma conta? <a href="cadUsu.html">Cadastre-se</a>{" "}
          </span>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;

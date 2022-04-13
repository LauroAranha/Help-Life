import React, { useState } from 'react';
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });
  };

  return (
    <div>
      <div id="login" className="box">
        <form className="form" onSubmit={handleSubmit}>
          <p>Entre</p>
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

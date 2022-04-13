import React from "react";
import "./LoginForm.css";

export default (props) => (
  <div>
    <div class="box">
      <section>
        <form id="login-form">
          <p>Entre</p>
          <label for="#">Email</label>
          <input type="email" id="login-email" required />
          <label for="password">Senha</label>
          <input type="password" id="login-password" required />
          <i class="bi bi-eye-slash" id="togglePassword"></i>
          <button class="btn yellow darken-2 z-depth-0">Login</button>
          <span>
            Não tem uma conta? <a href="cadUsu.html">Cadastre-se</a>{" "}
          </span>
        </form>
      </section>
    </div>
  </div>
);

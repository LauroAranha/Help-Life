import "./LoginForm.css";

const loginForm = () => (
  <div>
    <div id="login" className="box">
      <form className="form">
        <p>Entre</p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" required />

        <button>Login</button>

        <span>
          Não tem uma conta? <a href="cadUsu.html">Cadastre-se</a>{" "}
        </span>
      </form>
    </div>
  </div>
);
export default loginForm;

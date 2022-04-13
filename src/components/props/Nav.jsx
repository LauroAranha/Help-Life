import { Link } from "react-router-dom";
import "./Nav.css";

const nav = () => (
  <div id = "nav">
    <nav>
      <ul className="menu">
        <section id="logo">
          <li>
            <Link to="/">Help Life</Link>
          </li>
        </section>
        <section id="items-menu">
          <li>
            <Link to="/">
              <b>
                <span className="grifo">HOME</span>
              </b>
            </Link>
          </li>
          <li>
            <Link to="/ong">
              <b>
                <span className="grifo">ONG'S</span>
              </b>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <b>
                <span className="grifo">SOBRE NÓS</span>
              </b>
            </Link>
          </li>
        </section>
      </ul>
    </nav>
  </div>
);
export default nav;

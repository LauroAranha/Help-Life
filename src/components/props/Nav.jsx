import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default (props) => (
  <div>
    <nav>
      <ul className="menu">
        <section id="hl">
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
      {/* <div className="menu-overlay"></div>
      <a href="#" className="menu-open">
        <div className="container">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </a>

      <div className="side-menu-wrapper">
        <a href="#" className="menu-close">
          ×
        </a>
        <ul>
          <li>
            <a href="index.html" rel="nofollow">
              Home
            </a>
          </li>
          <li>
            <a href="ong.html" rel="nofollow">
              Ong
            </a>
          </li>
          <li>
            <a href="sobrenos.html" rel="nofollow">
              Sobre nós
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  </div>
);

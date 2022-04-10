import React from "react";
import "./ContentOng.css";

import vetor6 from "../../img/vetor6.png";

export default (props) => (
  <div>
    <div className="part3">
      <section>
        <h1>
          Ong's <br /> parceiras
        </h1>
        <p>
          Aqui você encontra as Ong's cadastradas no site, cada uma com diversos
          voluntarios dispostos a ajudar, escolha a que você melhor se
          identifique e comece a se cuidar. Caso seja proprietário de uma Ong e
          tenha interesse de ajudar cadastre-se no site.
        </p>
        <button className="registrar" id="myBtn">
          Registrar-se/login
        </button>
      </section>
      <img src={vetor6} />
    </div>
    <section id="cards-orgs"></section>
  </div>
);

import React from "react";
import "./ContentMain.css";
import vetor4 from "../../img/vetor4.png";
import vetor from "../../img/vetor.png";

export default (props) => (
  <div>
    <div className="main">
      <section>
        <h1>Nós podemos te ajudar</h1>
        <button className="registrar" id="myBtn">
          REGISTRE-SE
        </button>
      </section>
      <img src={vetor} />
    </div>

    <div className="part1">
      <img src={vetor4} />
      <section>
        <h2>Como te ajudamos</h2>
        <p>
          Somos uma rede que conecta diversas ong's dispostas a ajudar aqueles
          que passam por dificuldades com problemas a saúde mental. Em caso de
          estar deprimido abra as portas para nós, diversos profissionais podem
          atender você através de conversas particulares ou com grupos de apoio.
          Eles querem te ajudar, se você estiver disposta a permitir.
          Cadastre-se e conheça os beneficios do atendimento voluntário.
        </p>
      </section>
    </div>

  </div>
);

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

    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <p className="title-model">Entre</p>
        {/* <hr style="height:0.5px;border-width:0;color: #aaaaaa;background-color:#aaaaaa;" /> */}
        <p className="txt-model">Iniciar sessão como</p>
        <section className="model-cards">
          <article>
            <a href="form/logUsu.html">
              <section className="model-item">
                <span className="usuario">
                  <b>Usuário</b>
                </span>
              </section>
            </a>
            <span className="img-usuario">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#051D52"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </span>
          </article>
          <article>
            <a href="form/logOng.html">
              <section className="model-item">
                <span className="usuario">
                  <b>Ong</b>
                </span>
              </section>
            </a>
            <span className="img-usuario">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                fill="#051D52"
                className="bi bi-house-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
            </span>
          </article>
        </section>
      </div>
    </div>
  </div>
);

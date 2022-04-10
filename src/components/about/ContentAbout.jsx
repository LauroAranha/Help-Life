import React from "react";
import "./ContentAbout.css";
import vetor7 from "../../img/vetor7.png";

export default (props) => (
  <div>
{/*     <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <p className="title-model">Entre</p>
        <hr style="height:0.5px;border-width:0;color: #aaaaaa;background-color:#aaaaaa;" />
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
                  fill-rule="evenodd"
                  d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
            </span>
          </article>
          <article>
            <a href="form/logVol.html">
              <section className="model-item">
                <span className="usuario">
                  <b>Voluntário</b>
                </span>
              </section>
            </a>
            <span className="img-usuario">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#051D52"
                className="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fill-rule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
            </span>
          </article>
        </section>
      </div>
    </div> */}
    <div className="part2">
      <section>
        <h2>Sobre nós</h2>
        <p>
          Somos um grupo de alunos do Centro Paula Souza, que foram
          surpreendidos pela falta de atenção ao setor da saúde mental no brasil
          e por isso desejamos mudar esse panorama. Com essa visão surgiu o Help
          Life, uma iniciativa que deseja ajudar todas as pessoas através de um
          atendimento voluntário pela internet alcançando o maior número de
          pessoas possíveis, por isso caso esteja se sentindo deprimido ou
          necessitando de ajuda não hesite em se cadastrar. Caso queira nos
          ajudar no nosso sonho, cadastre sua Ong ou Instituição, junto com seus
          profissionais e voluntários e comece a ajudar pessoas hoje mesmo.
        </p>
      </section>
      <img src={vetor7} />
    </div>
  </div>
);

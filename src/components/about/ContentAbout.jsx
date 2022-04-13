import "./ContentAbout.css";
import vetor7 from "../../img/vetor7.png";

const contentAbout = () => (
  <div >
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
      <img alt="imagem7" src={vetor7} />
    </div>
  </div>
);
export default contentAbout;

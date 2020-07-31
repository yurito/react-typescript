import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/css/Home.css";
import { AppConfig } from "../types/AppConfig";
import Slide from "react-reveal/Slide";

const Home: React.FC<AppConfig> = ({ theme }) => {
  let history = useHistory();

  useEffect(() => {
    // Todo, pegar o param da URL para fazer scroll
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "smooth",
    // });
    console.log("o que tem aqui", history.location.hash);
  });

  return (
    <aside className="page-theme">
      <Slide top>
        <section className="home-landing screen-containter" id="about-me">
          <div className="container-fluid main-container container-home p-0">
            <div className="color-block d-none d-lg-block"></div>
            <div className="row home-details-container align-items-center">
              <div
                id="i-am-gorgeous"
                className="col-lg-4 bg position-absolute d-none d-lg-block   "
              ></div>
              <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
                <div>
                  <img
                    src={require("../assets/img/profile1-mobile-light.png")}
                    className="img-fluid main-img-mobile d-none d-sm-block d-lg-none"
                    alt="minha foto"
                  />
                  <h1 className="text-uppercase poppins-font">
                    <span>sobre </span>Mim
                  </h1>
                  <p className="open-sans-font">
                    Desde criança apaixonado por tecnologia, entusiasta e
                    dedicado. Minha vida profissional iniciou na área de Redes
                    de Computadores trabalhando com Servidores, Virtualização,
                    Cloud Computing, Planejamento e Implatação. Pouco tempo
                    depois migrei para Jogos Digitais, imergindo na area de
                    desenvolvimento de apps e sites onde me encontro atualmente.
                  </p>
                  <a className="btn-draw" href="#section2">
                    <span>Mais sobre min</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Slide>
      <section id="section2">
        <div className="container-fluid main-container screen-containter">
          Scroll suave adicionado
        </div>
      </section>
    </aside>
  );
};

export default Home;

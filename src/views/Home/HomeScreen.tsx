import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles/css/Home.css";
import { AppConfig } from "../../types/AppConfig";
import Slide from "react-reveal/Slide";
import ReactFullpage from "@fullpage/react-fullpage";

const Home: React.FC<AppConfig> = ({ theme }) => {
  // eslint-disable-next-line
  const history = useHistory();

  return (
    <aside className="page-theme">
      <ReactFullpage
        loopBottom
        parallaxOptions={{
          type: "reveal",
          percentage: 62,
          property: "translate",
        }}
        dragAndMove="vertical"
        scrollingSpeed={700}
        render={({ state }) => {
          return (
            <ReactFullpage.Wrapper>
              <Slide top>
                <section
                  className="home-landing screen-containter section"
                  id="about-me"
                >
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
                            src={
                              theme === "dark"
                                ? require("../../assets/img/img-mobile-dark.png")
                                : require("../../assets/img/img-mobile-light.png")
                            }
                            className="img-fluid main-img-mobile d-none d-sm-block d-lg-none"
                            alt="minha foto"
                          />
                          <h1 className="text-uppercase poppins-font">
                            <span>sobre </span>Mim
                          </h1>
                          <p className="open-sans-font">
                            Desde criança apaixonado por tecnologia, entusiasta
                            e dedicado. Minha vida profissional iniciou na área
                            de Redes de Computadores trabalhando com Servidores,
                            Virtualização, Cloud Computing, Planejamento e
                            Implatação. Pouco tempo depois migrei para Jogos
                            Digitais, imergindo na area de desenvolvimento de
                            apps e sites onde me encontro atualmente.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </Slide>
              <section id="more-about-me" className="section">
                <div className="container-fluid main-container screen-containter">
                  Scroll suave adicionado
                </div>
              </section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </aside>
  );
};

export default Home;

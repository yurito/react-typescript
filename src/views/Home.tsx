import React from "react";
import "../styles/css/Home.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import FluidSimulation from "../components/animation/fluid/index";
import { RouteComponentProps, useHistory } from "react-router-dom";

type TParams = { id: number };

const Home: React.FC = ({ match }: RouteComponentProps<TParams>) => {
  let id = match.params.id;
  let history = useHistory();
  return (
    <main onClick={() => history.push("/projetos")}>
      <section className="welcome no-space-section">
        <div className="who-am-i">
          <div hidden={!id}>
            <h3>ID: {id}</h3>
          </div>
          <Fade top>
            <label className="main-name">Yuri Farias</label>
          </Fade>
          <Slide bottom>
            <label className="sub-title">Olá, eu crio coisas!</label>
          </Slide>
        </div>
        <FluidSimulation />
      </section>
    </main>
  );
};

export default Home;

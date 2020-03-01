import React from "react";
import Fade from "react-reveal/Fade";
import "../styles/css/Home.css";
import ParalaxCard from "components/Cards/ParalaxCard";

const Projects: React.FC = () => {
  return (
    <main>
      <section className="welcome no-space-section">
        <div className="who-am-i">
          <Fade top>
            <label className="main-name">Projetos Lista</label>
          </Fade>
        </div>
      </section>
      <section className="welcome no-space-section">
        <div className="who-am-i">
          <ParalaxCard />
        </div>
      </section>
      <section className="welcome no-space-section">
        <div className="who-am-i">
          <Fade top>
            <label className="main-name">Projetos 2</label>
          </Fade>
        </div>
      </section>
    </main>
  );
};

export default Projects;

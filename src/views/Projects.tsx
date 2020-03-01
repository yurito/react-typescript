import React from "react";
import Fade from "react-reveal/Fade";
import "../styles/css/Home.css";
import ParalaxCard from "components/Cards/ParalaxCard";

const Projects: React.FC = () => {
  return (
    <main>
      <section className="welcome no-space-section">
        <ParalaxCard />
      </section>
    </main>
  );
};

export default Projects;

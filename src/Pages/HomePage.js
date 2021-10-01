import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particle";
import Typical from "react-typical";

const steps = [
  " Md. Symoon",
  1000,
  " WEB DEVELOPER",
  1000,
  " FRONTEND DEVELOPER",
  1000,
  " JAVASCRIPT DEVELOPER",
  1000,
];

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          HI THERE ! <br />
          I'm
          <span>
            <Typical steps={steps} loop={Infinity} wrapper="span" />
          </span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil
          voluptates ea dolore vel repellat? Quia tenetur non quam
          exercitationem. Lorem ipsum dolor sit amet.
        </p>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80%;
  }
`;

export default HomePage;

import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// img
import mainCharacter from "../resources/img/NormalCharacter.png";
import Athlete from "../resources/img/Athlete.png";
import BaekSu from "../resources/img/BaekSU.png";
import BusinessMan from "../resources/img/Business_Man.png";
import CEO from "../resources/img/CEO.png";
import Cluber from "../resources/img/Cluber.png";
import Died from "../resources/img/Died.png";
import Doctor from "../resources/img/Doctor.png";
import Gambler from "../resources/img/Gambler.png";
import Influensor from "../resources/img/Influensor.png";
import NoYeah from "../resources/img/No-Yeah.png";
import Prisoner from "../resources/img/Prisoner.png";
import SafeGuard from "../resources/img/Safe_Guard.png";
import SerialKiller from "../resources/img/Serial_Killer.png";
import SiBi from "../resources/img/Si-BI.png";
import Sunim from "../resources/img/Sunim.png";
import YangAChi from "../resources/img/YangAChi.png";
// modules
import Prompt from "./Prompt.jsx";
import GamePlay from "./GamePlay.jsx";
const Story = (props) => {
  const { state, stateHandler } = props;

  console.log(state[1].typeNum);

  return (
    <Fragment>
      <Container
        className={
          state[1].currentPage === "Story" ? "normal col-12" : "disapear col-12"
        }
      >
        <div className="d-flex">
          <Image src={mainCharacter}></Image>
          <div id="chooseForm" style={{ border: "1px solid red" }}>
            <Prompt state={state} stateHandler={stateHandler}></Prompt>
            <GamePlay state={state} stateHandler={stateHandler}></GamePlay>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Story;

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
import Ending from "./Ending.jsx";
const Story = (props) => {
  const { state, stateHandler } = props;
  return (
    <Fragment>
      <Container
        className={
          // num1 : state[1].currentPage === "Story" ? "normal col-12" : "disapear col-12"
          "disapear col-12"
        }
      >
        <div className="d-flex">
          <Image
            src={
              !state[4].goEnd || state[1].typeNum !== 1
                ? mainCharacter
                : state[4].endCode === 0 && state[1].typeNum === 1
                ? Died
                : state[4].endCode === 1 && state[1].typeNum === 1
                ? Sunim
                : state[4].endCode === 2 && state[1].typeNum === 1
                ? BusinessMan
                : state[4].endCode === 3 && state[1].typeNum === 1
                ? CEO
                : state[4].endCode === 4 && state[1].typeNum === 1
                ? Doctor
                : state[4].endCode === 5 && state[1].typeNum === 1
                ? Influensor
                : state[4].endCode === 6 && state[1].typeNum === 1
                ? Athlete
                : state[4].endCode === 7 && state[1].typeNum === 1
                ? Gambler
                : state[4].endCode === 8 && state[1].typeNum === 1
                ? NoYeah
                : state[4].endCode === 9 && state[1].typeNum === 1
                ? Cluber
                : state[4].endCode === 10 && state[1].typeNum === 1
                ? SafeGuard
                : state[4].endCode === 11 && state[1].typeNum === 1
                ? BaekSu
                : state[4].endCode === 12 && state[1].typeNum === 1
                ? SiBi
                : state[4].endCode === 13 && state[1].typeNum === 1
                ? Prisoner
                : state[4].endCode === 14 && state[1].typeNum === 1
                ? YangAChi
                : SerialKiller
            }
          ></Image>
          <div id="chooseForm" style={{}}>
            <Prompt state={state} stateHandler={stateHandler}></Prompt>
            {/* num4 : <GamePlay state={state} stateHandler={stateHandler}></GamePlay> */}
            <Ending state={state} stateHandler={stateHandler}></Ending>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Story;

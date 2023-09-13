import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Choose from "./Choose.jsx";
// module
import StatusBar from "./StatusBar";

const GamePlay = (props) => {
  const { state, stateHandler } = props;

  return (
    <Container
      className={
        state[1].typeNum === 1 && !state[4].goEnd ? "normal" : "disapear"
      }
      style={{ height: "100%" }}
    >
      <div id="status">
        <StatusBar state={state} stateHandler={stateHandler}></StatusBar>
      </div>
      <div id="games">
        <p id="today">
          {state[0].userName} : {Math.floor(state[3].gameMonth / 10) + "월"}
          <Button variant="warning">상점 가기</Button>
        </p>
        <p id="explain">
          {state[2].script[1][Math.floor(state[3].gameMonth / 10) - 1]}
        </p>
      </div>
      <div id="choose">
        <Choose state={state} stateHandler={stateHandler}></Choose>
      </div>
    </Container>
  );
};

export default GamePlay;

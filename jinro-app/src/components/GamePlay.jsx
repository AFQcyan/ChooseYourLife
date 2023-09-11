import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// module
import StatusBar from "./StatusBar";

const GamePlay = (props) => {
  const { state, stateHandler } = props;

  return (
    <Container
      className={state[1].typeNum === 1 ? "normal" : "disapear"}
      style={{ height: "100%" }}
    >
      <div id="status">
        <StatusBar state={state} stateHandler={stateHandler}></StatusBar>
      </div>
    </Container>
  );
};

export default GamePlay;

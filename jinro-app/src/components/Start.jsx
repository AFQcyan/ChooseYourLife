import React, { Fragment } from "react";
// Modules
import UserName from "./UserName.jsx";
// style
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Start = (props) => {
  const { state, stateHandler } = props;
  return (
    <Fragment>
      <Container
        className={
          state[1].currentPage === "Start" ? "normal col-12" : "disapear col-12"
        }
      >
        <h1 id="welcome" className={state[0].nameInputed ? "change" : "normal"}>
          WELCOME TO YANG-YOUNG
        </h1>
        <div id="userName">
          <UserName state={state} stateHandler={stateHandler}></UserName>
        </div>
      </Container>
    </Fragment>
  );
};

export default Start;

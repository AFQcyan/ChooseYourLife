import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Prompt = (props) => {
  const { state, stateHandler } = props;

  const onNextScript = () => {
    console.log(state[3].happy);
    if (state[2].currIndex >= state[2].script[state[1].typeNum].length - 1) {
      stateHandler([
        {
          index: 1,
          properties: {
            typeNum: 1,
          },
        },
      ]);
    } else {
      stateHandler([
        {
          index: 2,
          properties: {
            currIndex: state[2].currIndex + 1,
          },
        },
      ]);
    }
  };
  console.log(state[2].script[state[1].typeNum][state[2].currIndex]);

  return (
    <Fragment>
      <Container className={state[1].typeNum !== 1 ? "normal" : "disapear"}>
        <div id="prompt">
          {state[2].script[state[1].typeNum][state[2].currIndex]}
          <Button id="nextBtn" onClick={onNextScript}>
            다음
          </Button>
        </div>
      </Container>
    </Fragment>
  );
};

export default Prompt;

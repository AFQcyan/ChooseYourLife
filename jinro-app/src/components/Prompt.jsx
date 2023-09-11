import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Prompt = (props) => {
  const { state, stateHandler } = props;

  const onNextScript = () => {
    if (state[2].currIndex >= state[2].script[state[1].typeNum].length - 1) {
      if (state[1].typeNum === 0) {
        stateHandler([
          {
            index: 1,
            properties: {
              typeNum: 1,
            },
          },
        ]);
      }
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
    console.log();
  };

  return (
    <Fragment>
      <Container className={state[1].typeNum !== 1 ? "normal" : "disapear"}>
        <div id="prompt">
          {state[2].script[state[2].currScript][state[2].currIndex]}
          <Button id="nextBtn" onClick={onNextScript}>
            다음
          </Button>
        </div>
      </Container>
    </Fragment>
  );
};

export default Prompt;

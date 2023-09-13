import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Ending = (props) => {
  const { state, stateHandler } = props;

  

  const onNextScript = () => {
    stateHandler([
      {
        index: 4,
        properties: {
          endScriptIdx: state[4].endScriptIdx + 1,
        },
      },
    ]);
  };

  return (
    <Fragment>
      <Container
        className={
          state[1].typeNum === 1 && state[4].goEnd ? "normal" : "disapear"
        }
      >
        <div id="prompt">
          {state[4].endScript[0][state[4].endScriptIdx]}
          <Button id="nextBtn" onClick={onNextScript}>
            다음
          </Button>
        </div>
      </Container>
    </Fragment>
  );
};

export default Ending;

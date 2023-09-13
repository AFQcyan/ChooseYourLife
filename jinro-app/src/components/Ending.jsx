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

  let endIdx = 0;
  if (state[4].goEnd) {
    if (
      state[3].money < 1 ||
      state[3].study < 1 ||
      state[3].friend < 1 ||
      state[3].strength < 1 ||
      state[3].happy > 199
    ) {
      endIdx = 0;
    }
  }

  return (
    <Fragment>
      <Container
        className={
          state[1].typeNum === 1 && state[4].goEnd ? "normal" : "disapear"
        }
      >
        <div id="prompt">
          {state[2].script[endIdx][state[4].endScriptIdx]}
          <Button id="nextBtn" onClick={onNextScript}>
            다음
          </Button>
        </div>
      </Container>
    </Fragment>
  );
};

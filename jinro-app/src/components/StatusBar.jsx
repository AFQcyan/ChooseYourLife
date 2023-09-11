import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const StatusBar = (props) => {
  const { state, stateHandler } = props;

  return (
    <Fragment>
      <div id="statusBars">
        <div>
          <div
            className="statusBar"
            style={{
              backgroundColor: "#444",
              width: "70%",
              display: "block",
            }}
          >
            <div
              className="statusRealBar"
              style={{
                width: "100%",
                transformOrigin: "left",
                backgroundColor: "gold",
                transform: `scaleX(${parseInt(state[3].money)}%)`,
              }}
            ></div>
          </div>
        </div>
        <div
          className="statusBar"
          style={{
            backgroundColor: "#444",
            width: "70%",
            display: "block",
          }}
        >
          <div
            className="statusRealBar"
            style={{
              width: "100%",
              transformOrigin: "left",
              backgroundColor: "lightgreen",
              transform: `scaleX(${parseInt(state[3].study)}%)`,
            }}
          ></div>
        </div>
        <div
          className="statusBar"
          style={{
            backgroundColor: "#444",
            width: "70%",
            display: "block",
          }}
        >
          <div
            className="statusRealBar"
            style={{
              width: "100%",
              transformOrigin: "left",
              backgroundColor: "pink",
              transform: `scaleX(${parseInt(state[3].friend)}%)`,
            }}
          ></div>
        </div>
        <div
          className="statusBar"
          style={{
            backgroundColor: "#444",
            width: "70%",
            display: "block",
          }}
        >
          <div
            className="statusRealBar"
            style={{
              width: "100%",
              transformOrigin: "left",
              backgroundColor: "crimson",
              transform: `scaleX(${parseInt(state[3].strength)}%)`,
            }}
          ></div>
        </div>
      </div>
    </Fragment>
  );
};

export default StatusBar;

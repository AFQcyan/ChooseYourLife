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
          <div>
            <p>돈</p>
            <p>
              {state[3].money === 0
                ? 0
                : state[3].money.toString().padStart(2, "0")}
            </p>
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
                backgroundColor: "gold",
                transform: `scaleX(${parseInt(state[3].money) / 200}%)`,
              }}
            ></div>
          </div>
        </div>
        <div>
          <div>
            <p>공부</p>
            <p>
              {state[3].study === 0
                ? 0
                : state[3].study.toString().padStart(2, "0")}
            </p>
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
        </div>
        <div>
          <div>
            <p>인싸력</p>
            <p>
              {state[3].friend === 0
                ? 0
                : state[3].friend.toString().padStart(2, "0")}
            </p>
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
        </div>
        <div>
          <div>
            <p>체력</p>
            <p>
              {state[3].strength === 0
                ? 0
                : state[3].strength.toString().padStart(2, "0")}
            </p>
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
        <div id="lifeHappy">
          <div>
            <p>불만지수</p>
            <p>
              {state[3].happy === 0
                ? 0
                : state[3].happy.toString().padStart(2, "0")}
            </p>
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
                backgroundColor: "coral",
                transform: `scaleX(${parseInt(state[3].happy) / 2}%)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StatusBar;

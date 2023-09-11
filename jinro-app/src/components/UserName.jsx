import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const UserName = (props) => {
  const { state, stateHandler } = props;

  const userNameChange = (e) => {
    stateHandler([
      {
        index: 0,
        properties: {
          userName: e.target.value === "" ? "Your name" : e.target.value,
        },
      },
    ]);
  };
  const userNameSubmit = (e) => {
    stateHandler([
      {
        index: 0,
        properties: {
          nameInputed: true,
        },
      },
    ]);
  };
  //script Open!
  const userNameComfirmed = (e) => {
    stateHandler([
      {
        index: 1,
        properties: {
          currentPage: "Story",
        },
      },
      {
        index: 2,
        properties: {
          //index 2 : 대사 스크립트
          currIndex: 0,
          currScript: 0,
          script: [
            [
              // 0 : 프롤로그
              `나는 ${state[0].userName}. 대한민국의 고3이다.`,
              "벌써 17살인데 내 인생은 왜 이렇게 망했지?",
              "부모님은 두 분다 돌아가시고, 성적도 안좋아.",
              "대체 난 잘하는게 뭐지? 그냥 죽어야 겠다",
              "어? 거기 당신. 나 보고 있는 당신 말이야.",
              "혹시 나를 키워주시지 않을래요?",
              "나 진짜 불쌍해 보이잖아 한번만 키워줘요",
              "약속한거다? 그럼 나 이제부터 (아빠/엄마) 라고 부른다?",
              "헤헤 집 생겼당",
              <span className="gray">하..괜찮을까....?</span>,
            ],
            ["성해짐승~!"],
          ],
        },
      },
    ]);
  };
  const userNameRejected = (e) => {
    stateHandler([
      {
        index: 0,
        properties: {
          nameInputed: false,
        },
      },
    ]);
  };

  return (
    <Fragment>
      <h3
        id="isYourName"
        className={state[0].nameInputed ? "normal" : "disapear"}
      >
        이 이름이 맞습니까?
      </h3>
      <h1 id="yourName" className={state[0].nameInputed ? "change" : "normal"}>
        {state[0].userName}
      </h1>
      <Container
        id="nameConfirmBtns"
        className={state[0].nameInputed ? "normal" : "disapear"}
      >
        <Button variant="outline-success" onClick={userNameComfirmed}>
          예
        </Button>
        <Button variant="outline-danger" onClick={userNameRejected}>
          아니요
        </Button>
      </Container>

      <InputGroup
        className="mx-auto mt-5"
        style={
          state[0].nameInputed ? { opacity: 0, height: 0 } : { width: "25%" }
        }
      >
        <Form.FloatingLabel controlId="userNameInput" label="당신의 이름은?">
          <Form.Control
            type="text"
            placeholder=""
            onChange={userNameChange}
          ></Form.Control>
        </Form.FloatingLabel>
        <Button variant="dark" onClick={userNameSubmit}>
          결정!
        </Button>
      </InputGroup>
    </Fragment>
  );
};

export default UserName;

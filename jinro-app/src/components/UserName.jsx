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
            [
              "부모님. 저를 받아주셔서 감사합니다. 아직 1월이니 부모님의 의견에 따르겠습니다.",
              "이제 다음달이면 개학이네요. 고3을 같이 보내게 되어서 영광입니다.",
              "학교는 정말 재밌는 곳이네요. 3월의 학교가 이렇게 좋게 느껴진건 처음이네요.",
              "4월은 벚꽃이 참 예쁘죠. 이런 날 소풍이라도 가면 참 좋을텐데요.",
              "5월은 가족의 달이래요. 가족과 함께 소중한 시간을 보내는게 좋을거 같아요!",
              "이번달이 기말고사 기간이에요! 빨리 준비를 해야겠어요. 잠시만요!",
              "그래도 시험이 끝나니 후련하네요. 곧 여름방학이니 쉴 준비를 해야겠어요!",
              "역사시간에 8월15일이 광복절이라고 배웠어요. 저도 부모님을 만난게 얼마나 행운인지 몰라요.",
              "점점 낙엽이 떨어지네요. 가을이 되니 왠지 쓸쓸해지네요. 부모님도 그러신가요?",
              "10월은 휴일이 가장 많은 달이죠. 근데 그렇게 행복하진 않네요.",
              "다음 달에 시험을 치르고 나면..저도 독립이네요. 그동안 감사했습니다.",
              "지금까지 절 돌봐주셔서 감사해요. 마지막으로 저희 같이 뭐라도 할까요?",
              "이렇게 죽을순 없는데...한번의 기회가 더 주어진다면....",
              "하. 나 집 나갈거야. 당신 그지같아서 같이 못있어주겠어. 혼자 잘 살아봐",
            ],
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
        <Button variant="outline-success" onClick={userNameComfirmed/*num3 : userNameComfirmed*/}>
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

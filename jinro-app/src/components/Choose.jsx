import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Choose = (props) => {
  const { state, stateHandler } = props;

  const updateState = (
    money = 0,
    study = 0,
    friend = 0,
    strength = 0,
    happy = 0
  ) => {
    const randInt = Math.random();
    stateHandler([
      {
        index: 3,
        properties: {
          randEvent: randInt,
          money: state[3].money + money,
          study: state[3].study + study > 100 ? 100 : state[3].study + study,
          friend:
            state[3].friend + friend > 100 ? 100 : state[3].friend + friend,
          strength:
            state[3].strength + strength > 100
              ? 100
              : state[3].strength + strength,
          happy: state[3].happy + happy < 0 ? 0 : state[3].happy + happy,
        },
      },
    ]);

    if (
      state[3].money + money < 1 ||
      state[3].study + study < 1 ||
      state[3].friend + friend < 1 ||
      state[3].strength + strength < 1 ||
      state[3].happy + happy > 199
    ) {
      stateHandler([
        {
          index: 4,
          properties: {
            goEnd: true,
            endCode: 0,
            endScriptIdx: 0,
            endScript: [["이거야", "이거야1", "이거2야", "이거3야", "이거4야"]],
          },
        },
      ]);
    }
  };

  const reloadingScript = [
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
    [
      "역시 돈 벌려면 알바가 최고지",
      "근데 무슨 알바 해야하지?",
      `그래. ${
        state[3].study > 80
          ? "과외 알바를 하면 딱 좋겠다!"
          : state[3].strength >= 80
          ? "공사장 알바를 하면 딱 좋겠다!"
          : state[3].friend >= 80
          ? "클럽 알바를 하면 딱 좋겠다!"
          : state[3].money >= 12000
          ? "있는 돈으로 주식이나 좀 해볼까...?이거야~!"
          : "편의점 알바나 해야지 뭐..."
      }`,
      state[3].study > 80
        ? "(돈 +5000, 공부 +10, 인싸력 -10, 불만지수 +35)"
        : state[3].strength >= 80
        ? "(돈 +3500, 인싸력 -10, 체력 +15, 불만지수 +50)"
        : state[3].friend >= 80
        ? "(돈 +4000, 공부 -5, 인싸력 +10, 체력 -10, 불만지수 +35)"
        : state[3].money >= 12000
        ? "(돈 +보유금 비례, 인싸력 -15, 체력 -5, 불만지수 +30)"
        : "(돈 +1000, 공부 -5, 인싸력 -5, 체력 -5, 불만지수 +45)",
    ],
    [
      "그래. 이제 스터디카페 가서 공부좀 해봐야지.",
      "근데.. 어떻게 공부를 하지?",
      state[3].happy > 175
        ? "아ㅏ 짜증나니까 공부도 안되네 걍 때려치고 노래방이나 가야지."
        : state[3].study > 70
        ? "그래! 계획해 놓은대로 공부해서 전교 1등을 차지하겠다!"
        : state[3].study > 35
        ? "흠.. 잘모르겠지만 대충은 알겠네. 커피먹고 더 해야겠다."
        : "아잇 모르겠다 ..- 1등아 이거 어떻게 하는거야ㅏㅓ??",
      state[3].happy > 175
        ? "(돈 -1200, 체력 -10.... 돈만 날렸다...)"
        : state[3].study > 70
        ? "(돈 -500, 공부 +20, 체력 -10, 불만지수 +20)"
        : state[3].study > 35
        ? "(돈 -900, 공부 +15, 불만지수 +30)"
        : "(돈 -1000, 공부 +25, 인싸력 +5, 체력 -15, 불만지수 +25)",
    ],
    [
      "으..몸도 찌뿌둥한데 가서 헬스나 해야겠다.",
      "오늘은 어디를 조져볼까?",
      state[3].happy > 150
        ? "하ㅏㅏ 이 스트레스를 풀어야 겠다. 풀업 300개 가즈아ㅏ"
        : state[3].money > 18000
        ? "PT 쌤 잘 부탁드립니다 ^^ 오늘은 어디부터 할까요?"
        : state[3].strength > 60
        ? "ㅇㅋ 오늘은 하체 조진다 중량스쿼트 딱대"
        : "아.. 다칠거 같은디.. 일단 살살 해야겠다.",
      state[3].happy > 190
        ? state[3].randEvent > 0.5
          ? "(돈 -4000, 체력 -15, 불만지수 +80.. 크게 다쳐버렸다..)"
          : "(돈 -1200, 인싸력 +5, 체력 +30, 불만지수 -50. 운동 대성공!)"
        : state[3].money > 18000
        ? "(돈 -2200, 인싸력 +10, 체력 +20, 불만지수 -35)"
        : state[3].strength > 60
        ? "(돈 -1200, 체력 +15, 불만지수 -35)"
        : "(돈 -1200, 체력 +10, 불만지수 -25)",
    ],
    [
      "아잇 ENFP 인 나는 밖에 나가서 친구들을 만나야해!",
      "클럽에 가서 몸이나 ㅈㄴ 부대껴야지 안되겠어",
      state[3].happy > 150
        ? "스트레스 쌓인거 다푼다 ㅈㄴ 달려~~"
        : state[3].friend > 90
        ? "어 카리나님 안녕하세요? 같이 노실래요?"
        : state[3].friend > 40
        ? "어 민수야 우리 같이 클럽가자~오늘 물 좋대"
        : "아잇 클럽에 인싸놈들 개많네.. 너무 위축된다...",
      state[3].happy > 190
        ? state[3].randEvent < 0.2
          ? "(돈 -5000, 인싸력 -20, 불만지수 +100.. 클럽에서 도둑맞았다..)"
          : "(돈 -600, 인싸력 +30, 체력 -10, 불만지수 -65. 여자 번호땄다!)"
        : state[3].friend > 90
        ? "(돈 -2500, 공부 +5, 인싸력 +100, 불만지수 -80)"
        : state[3].friend > 40
        ? "(돈 -600, 인싸력 +10, 체력 +5, 불만지수 -45)"
        : "(돈 -600, 인싸력 -5, 불만지수 +40)",
    ],
    [
      "하 C바 학교 가야되네. 가기 싫다가기 싫다가기 싫",
      "그래도 가야지...무어 어쩌겠어..",
      state[3].happy > 190
        ? state[3].randEvent < 0.25
          ? "하.. 야 김민수. 너 오늘 죽X야 겠다. 나 따라와"
          : "선생님.. 저 스트레스가 주체가 안돼요,, 어쩌죠...?"
        : state[3].money > 13000
        ? "야 민수야. 내가 빵값의 30배 줄테니까 빵좀 사와줄래? 땡큐~"
        : state[3].friend > 80
        ? "아~ 사진은 한명씩 천천히 와서 찍어~! 잘 올려주면 내 계정에 태그해줄게!"
        : state[3].strength > 80
        ? state[3].happy > 160
          ? "야 김민수 ㅋㅋ 가서 빵이나 하나 사와 ㅋㅋ"
          : "내년 육상대회를 위해 열심히 준비해야지..."
        : state[3].study > 80
        ? state[3].friend > 70
          ? "야야 숙제는 1장당 5000원이다 안내면 다음부턴 안준다"
          : state[3].friend < 20 && state[3].money < 10000
          ? "어..민규야.. 어 니가 시킨 숙제 다했어.... 고마워..."
          : "하 이번 기말 범위 실화냐 야자까지 풀로 채워야겠다..."
        : "아 몰랑 그냥 그럭저럭 놀다 가야지 히힛",
      state[3].happy > 190
        ? state[3].randEvent < 0.25
          ? "(모든 스택 최저치로 감소. 학교폭력 가해자로 처벌 받았습니다.)"
          : "(공부 +5, 인싸력 +5, 불만지수 -50.. 상담사에게 상담받았습니다...)"
        : state[3].money > 13000
        ? "(돈 -1000, 인싸력 +10, 불만지수 -75)"
        : state[3].friend > 80
        ? "(돈 +1500, 인싸력 +35, 체력 -5, 불만지수 -30)"
        : state[3].strength > 80
        ? state[3].happy > 160
          ? "(돈 -600, 인싸력 +5, 불만지수 -30)"
          : "(공부 -5, 인싸력 -5, 체력 +25, 불만지수 +40)"
        : state[3].study > 80
        ? state[3].friend > 70
          ? "(돈 +3500, 공부 +15, 인싸력 +10, 불만지수 -45)"
          : state[3].friend < 20 && state[3].money < 10000
          ? "(돈 +300, 공부 +5, 체력 -5, 불만지수 +25)"
          : "(공부 +20, 불만지수 +10)"
        : "(돈 제외 모두 +5, 불만지수 +10)",
    ],
    [
      "...............",
      state[3].happy < 100
        ? "그래... 나만의 시간을 가지자."
        : state[3].happy > 190
        ? "....그래... 넌 살아남지 못할것이다."
        : "...그래.. 아직 때가 아니야.",
    ],
    [
      "오랜만에 해외여행이나 가보자!",
      "어떤 여행을 떠나게 될까....?",
      state[3].happy > 160
        ? "아.. 요즘 너무 힘들다.. 스트레스만 쫘ㅏㄱ 풀어야지"
        : state[3].money > 10000 && state[3].study > 60
        ? "3시엔 여기...5시엔 여기가고... 크 조사해오길 잘했다"
        : state[3].strength > 90
        ? "오? 국토대장정 레이스? 이건 못참지ㅣㅣㅣㅣ"
        : state[3].friend > 70 && state[3].happy < 90
        ? "어 마이콜. 그래서 여기가 그 명소야? 개쩌는데? ㅋㅋㅋ"
        : "크 경치좋네. 적당히 힐링되고 딱 좋다!",
      state[3].happy > 160
        ? "(돈 -3500, 공부,인싸력,체력 -5, 불만지수 -60)"
        : state[3].money > 10000 && state[3].study > 60
        ? "(돈 -2000, 공부,인싸력,체력 +10, 불만지수 -70)"
        : state[3].strength > 90
        ? "(돈 +1500, 공부,인싸력 +0, 체력 +30, 불만지수 -70)"
        : state[3].friend > 70 && state[3].happy < 90
        ? "(돈 -1000, 인싸력 +15, 체력 -5, 불만지수 -80"
        : "(돈 -2500, 공부,인싸력 +5, 체력 -10, 불만지수 -40)",
    ],
  ];

  const onAlba = (e) => {
    stateHandler([
      {
        index: 1,
        properties: { typeNum: 2 },
      },
      {
        index: 3,
        properties: {
          prevGameMonth: state[3].gameMonth,
          gameMonth: state[3].gameMonth + 5,
        },
      },
      {
        index: 3,
        properties:
          state[3].study > 80
            ? updateState(5000, 10, -10, 0, 35)
            : state[3].strength >= 80
            ? updateState(3500, 0, -10, 15, 50)
            : state[3].friend >= 80
            ? updateState(4000, -5, 10, -10, 35)
            : state[3].money >= 12000
            ? updateState(
                parseInt(Math.random() * (state[3].money / 10) + 3000),
                0,
                -15,
                -5,
                30
              )
            : updateState(1000, -5, -5, -5, 45),
      },
      {
        index: 2,
        properties: { currIndex: 0, script: reloadingScript },
      },
    ]);
  };
  const onStudyCafe = (e) => {
    stateHandler([
      {
        index: 1,
        properties: { typeNum: 3 },
      },
      {
        index: 3,
        properties: {
          prevGameMonth: state[3].gameMonth,
          gameMonth: state[3].gameMonth + 5,
        },
      },
      {
        index: 3,
        properties:
          state[3].happy > 175
            ? updateState(-1250, 0, 0, -10, 0)
            : state[3].study > 70
            ? updateState(-750, 20, 0, -10, 20)
            : state[3].study > 35
            ? updateState(-900, 15, 0, 0, 30)
            : updateState(-1000, 25, 5, -15, 25),
      },
      {
        index: 2,
        properties: { currIndex: 0, script: reloadingScript },
      },
    ]);
  };
  const onHealth = (e) => {
    stateHandler([
      {
        index: 1,
        properties: { typeNum: 4 },
      },

      {
        index: 3,
        properties: {
          prevGameMonth: state[3].gameMonth,
          gameMonth: state[3].gameMonth + 5,
        },
      },
      {
        index: 3,
        properties:
          state[3].happy > 150
            ? state[3].randEvent > 0.5
              ? updateState(-4000, 0, 0, -15, 80)
              : updateState(-1200, 0, 5, 30, -50)
            : state[3].money > 18000
            ? updateState(-2200, 0, 10, 20, -35)
            : state[3].strength > 60
            ? updateState(-1200, 0, 0, 15, -35)
            : updateState(-1200, 0, 0, 10, -25),
      },
      {
        index: 2,
        properties: { currIndex: 0, script: reloadingScript },
      },
    ]);
  };
  const onClub = (e) => {
    stateHandler([
      {
        index: 1,
        properties: { typeNum: 5 },
      },

      {
        index: 3,
        properties: {
          prevGameMonth: state[3].gameMonth,
          gameMonth: state[3].gameMonth + 5,
        },
      },
      {
        index: 3,
        properties:
          state[3].happy > 150
            ? state[3].randEvent < 0.2
              ? updateState(-5000, 0, -20, 0, 100)
              : updateState(-1600, 0, 30, -10, -55)
            : state[3].friend > 90
            ? updateState(2500, 5, 100, 0, -70)
            : state[3].friend > 40
            ? updateState(-1600, 0, 10, 5, -35)
            : updateState(-1600, 0, -5, 0, 50),
      },
      {
        index: 2,
        properties: { currIndex: 0, script: reloadingScript },
      },
    ]);
  };
  const onSchool = (e) => {
    stateHandler([
      {
        index: 1,
        properties: { typeNum: 6 },
      },

      {
        index: 3,
        properties: {
          prevGameMonth: state[3].gameMonth,
          gameMonth: state[3].gameMonth + 5,
        },
      },
      {
        index: 3,
        properties:
          state[3].happy > 190
            ? state[3].randEvent < 0.1
              ? updateState(-20000, -100, -100, -100, 1000)
              : updateState(0, 5, 5, 0, -50)
            : state[3].money > 13000
            ? updateState(-1000, 0, 10, 0, -75)
            : state[3].friend > 80
            ? updateState(1500, 0, 35, -5, -30)
            : state[3].strength > 90
            ? state[3].happy > 160
              ? updateState(-600, 0, 5, 0, -30)
              : updateState(0, -5, -5, 25, 40)
            : state[3].study > 80
            ? state[3].friend > 70
              ? updateState(3500, 15, 10, 0, -45)
              : state[3].friend < 20 && state[3].money < 10000
              ? updateState(300, 5, 0, -5, 25)
              : updateState(0, 20, 0, 0, 10)
            : updateState(0, 5, 5, 5, 20),
      },
      {
        index: 2,
        properties: { currIndex: 0, script: reloadingScript },
      },
    ]);
  };
  const onBangchi = (e) => {
    stateHandler([
      {
        index: 1,
        properties: { typeNum: 7 },
      },
      {
        index: 3,
        properties: {
          prevGameMonth: state[3].gameMonth,
          gameMonth: state[3].gameMonth + 5,
        },
      },
      {
        index: 3,
        properties:
          state[3].happy < 100
            ? updateState(0, 0, 0, 0, 30)
            : state[3].happy > 190
            ? stateHandler([
                {
                  index: 4,
                  properties: {
                    goEnd: true,
                    endCode: 0,
                  },
                },
              ])
            : updateState(0, 0, 0, 0, 45),
      },
      {
        index: 2,
        properties: { currIndex: 0, script: reloadingScript },
      },
    ]);
  };
  const onTravel = (e) => {
    stateHandler([
      {
        index: 1,
        properties: { typeNum: 8 },
      },
      {
        index: 3,
        properties: {
          prevGameMonth: state[3].gameMonth,
          gameMonth: state[3].gameMonth + 5,
        },
      },
      {
        index: 3,
        properties:
          state[3].happy > 160
            ? updateState(-3500, -5, -5, -5, -60)
            : state[3].money > 10000 && state[3].study > 60
            ? updateState(-2000, 10, 10, 10, -70)
            : state[3].strength > 90
            ? updateState(1500, 0, 0, 30, -70)
            : state[3].friend > 70 && state[3].happy < 90
            ? updateState(-1000, 0, 15, -5, -70)
            : updateState(-2500, 5, 5, -10, -40),
      },
      {
        index: 2,
        properties: { currIndex: 0, script: reloadingScript },
      },
    ]);
  };
  const onRandom = (e) => {
    stateHandler([
      {
        index: 1,
        properties: { typeNum: 9 },
      },
      {
        index: 3,
        properties: {
          prevGameMonth: state[3].gameMonth,
          gameMonth: state[3].gameMonth + 5,
        },
      },
      {
        index: 2,
        properties: { currIndex: 0, script: reloadingScript },
      },
    ]);
  };

  return (
    <Fragment>
      <div id="chooseYou">
        <Button variant="dark" onClick={onAlba}>
          알바하기
        </Button>
        <Button variant="dark" onClick={onStudyCafe}>
          스카가기
        </Button>
        <Button variant="dark" onClick={onHealth}>
          헬스장가기
        </Button>
        <Button variant="dark" onClick={onClub}>
          클럽가기
        </Button>
        <Button variant="dark" onClick={onSchool}>
          학교가기
        </Button>
        <Button variant="dark" onClick={onBangchi}>
          방치하기
        </Button>
        <Button variant="dark" onClick={onTravel}>
          여행가기
        </Button>
        <Button variant="dark" onClick={onRandom}>
          ???
        </Button>
      </div>
    </Fragment>
  );
};

export default Choose;

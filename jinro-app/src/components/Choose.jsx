import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import UserName from "./UserName";

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

    if (state[3].happy + happy > 9999) {
      if (
        state[3].money + money < 45 &&
        state[3].study + study < 45 &&
        state[3].friend + friend < 45 &&
        state[3].strength + strength < 45 &&
        state[3].happy + happy > 75
      ) {
        stateHandler([
          {
            index: 4,
            properties: {
              goEnd: true,
              endCode: 13,
              endScriptIdx: 0,
              endScript: [
                [
                  <span className="gray">
                    어라? {state[0].userName} 가 집에 없다. 어떻게 된거지?
                  </span>,
                  <span className="gray">{state[0].userName}! 어디갔어?</span>,
                  <span className="gray">
                    몇날 몇일을 찾았지만 결국 {state[0].userName} 은 찾지
                    못했다.
                  </span>,
                  <span className="gray">
                    그로부터 5년후, 그놈의 법적 보호자인 나에게 연락이 왔다.
                  </span>,
                  <span className="gray">
                    {state[0].userName} 재소자가 면회를 신청했습니다.
                  </span>,
                  <span className="gray">곧바로 그곳으로 달려갔다.</span>,
                  <span className="gray">
                    그곳에서 본 {state[0].userName} 는 완전한 죄수의 눈빛이었다.
                  </span>,
                  <span className="gray">
                    그곳에서 본 {state[0].userName} 는 애타게 내 이름을
                    부르짖으면서 사과했다. 내가 그를 버렸고, 그 때문에 나쁜 길에
                    빠져버렸다고, 갱생의 기회를 달라고 말이다.
                  </span>,
                  <span className="gray">하지만, 이미 너무 늦어버렸다.</span>,
                  <span className="gray">
                    구슬피 우는 소리를 뒤로 하고 나는 교도소를 빠져나왔다.
                  </span>,
                  "엔딩 13 : 7번방의 고3 수감자 엔딩",
                ],
              ],
            },
          },
        ]);
      } else if (
        state[3].money + money >= 45 &&
        state[3].study + study >= 45 &&
        state[3].friend + friend >= 45 &&
        state[3].strength + strength >= 45 &&
        state[3].happy + happy <= 75
      ) {
        stateHandler([
          {
            index: 4,
            properties: {
              goEnd: true,
              endCode: 15,
              endScriptIdx: 0,
              endScript: [
                [
                  <span className="gray">
                    어라? {state[0].userName} 가 집에 없다. 어떻게 된거지?
                  </span>,
                  <span className="gray">{state[0].userName}! 어디갔어?</span>,
                  <span className="gray">
                    몇날 몇일을 찾았지만 결국 {state[0].userName} 은 찾지
                    못했다.
                  </span>,
                  <span className="gray">
                    그로부터 5년후, 뉴스에서 한 기사가 흘러나온다.
                  </span>,
                  <span className="gray">
                    -어젯밤 택배 연쇄살인사건의 12번째 피해자가 발생했습니다.
                  </span>,
                  <span className="gray">
                    -범인은 검은 후드 우비를 입고 오른손에 칼을 들었던 것으로
                    보입니다.
                  </span>,
                  <span className="gray">
                    -인근 주민 여러분들은 부디 안전ㅇ....
                  </span>,
                  <span className="gray">
                    -------띵---동-------띵-0-동-----
                  </span>,
                  <span className="gray">
                    갑자기 울리는 벨소리. 누구냐고 물어본 답변엔
                  </span>,
                  <span className="gray">~~~택배요~~</span>,
                  <span className="gray">
                    나는 하이X트 신상 휴대폰이 벌써 배달됐다고 생각해 벌컥 문을
                    열었다.
                  </span>,
                  <span className="gray">
                    내가 시킨 상품이 직접 수령 상품이란걸 알아챘을땐, 이미
                    늦었었다.
                  </span>,
                  <span className="gray">내 배에는 깊은 칼이 꽂혔다.</span>,
                  `부모님...저에요... 기억하세요?`,
                  `당신이 나 버렸잖아요...제가 당신을 얼마나 찾았는지 알아요????`,
                  `하하....절 키우는거 하나가..그렇게 어려우셨나봐요?``그래도 당신한테 배운건 있어서, 이렇게 안잡히고 당신을 죽일 수 있었네요.`,
                  `전 평생의 소원을 이뤘네요. 안녕히가세요. 나의 실패작`,
                  "엔딩 HIDDEN : [돔 공연 축하해] 연쇄살인마 엔딩",
                ],
              ],
            },
          },
        ]);
      } else {
        stateHandler([
          {
            index: 4,
            properties: {
              goEnd: true,
              endCode: 14,
              endScriptIdx: 0,
              endScript: [
                [
                  <span className="gray">
                    어라? {state[0].userName} 가 집에 없다. 어떻게 된거지?
                  </span>,
                  <span className="gray">{state[0].userName}! 어디갔어?</span>,
                  <span className="gray">
                    몇날 몇일을 찾았지만 결국 {state[0].userName} 은 찾지
                    못했다.
                  </span>,
                  <span className="gray">
                    그로부터 5년후, 뉴스에서 한 기사가 흘러나온다.
                  </span>,
                  <span className="gray">야! 너 담배 안꺼!</span>,
                  "아이 진짜 말 드릅게 맞네 아저씨 내가 누군지 알아요?",
                  `경기도 통짱 양동이파 부두목 ${state[0].userName} 이야!`,
                  `밟히기 싫으면 눈 깔아 이 벌레들아. 눈 안깔아? 이걸 확 C`,
                  "엔딩 14 :  JO폭 엔딩",
                ],
              ],
            },
          },
        ]);
      }
    } else if (
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
            endScript: [
              [
                <span className="gray">
                  어라? {state[0].userName} 의 상태가 좀 이상하다.
                </span>,
                <span className="gray">{state[0].userName}! 왜그래!</span>,
                <span className="gray">
                  {state[0].userName}가... 집을 나가버렸다...
                </span>,
                `GAME OVER (이유 : ${
                  state[3].money + money < 1
                    ? "돈이 없어서"
                    : state[3].study + study < 1
                    ? "성적이 낮아서"
                    : state[3].friend + friend < 1
                    ? "왕따를 당해서"
                    : state[3].strength + strength < 1
                    ? "몸이 너무 약해서"
                    : state[3].happy + happy > 199
                    ? "스트레스를 너무 많이 받아서"
                    : "의문사"
                } )`,
              ],
            ],
          },
        },
      ]);
    } else if (state[3].gameMonth === 125) {
      if (
        state[3].money + money >= 16000 &&
        state[3].study + study >= 80 &&
        state[3].friend + friend >= 80 &&
        state[3].strength + strength >= 80
      ) {
        stateHandler([
          {
            index: 4,
            properties: {
              goEnd: true,
              endCode: 1,
              endScriptIdx: 0,
              endScript: [
                [
                  <span className="gray">
                    졸업후 10년뒤. 나는 {state[0].userName}를 찾아갔다.
                  </span>,
                  <span className="gray">{state[0].userName}! 왜그래!</span>,
                  <span className="gray">
                    {state[0].userName}는 승려가 되어있었다.
                  </span>,
                  "세상의 모든것을 꺠우치고 나니, 결국 남는것은 진리더군요.",
                  <span className="gray">
                    나는 할말을 잃고 그자리에서 돌아나왔다.
                  </span>,
                  <span className="gray">
                    완벽함의 결말이 이것이란 말인가...
                  </span>,
                  "엔딩 1 : 완벽한 승려 엔딩",
                  "[새로고침으로 다시하기]",
                ],
              ],
            },
          },
        ]);
      } else if (
        state[3].money + money >= 10000 &&
        state[3].study + study >= 50 &&
        state[3].friend + friend >= 50 &&
        state[3].strength + strength >= 50
      ) {
        const maxArr = [
          parseInt((state[3].money + money) / 200),
          parseInt(state[3].study + study),
          parseInt(state[3].friend + friend),
          parseInt(state[3].strength + strength),
        ];
        console.log(Math.max(...maxArr));
        if (Math.max(...maxArr) >= 80) {
          if (maxArr.indexOf(Math.max(...maxArr)) === 0) {
            stateHandler([
              {
                index: 4,
                properties: {
                  goEnd: true,
                  endCode: 3,
                  endScriptIdx: 0,
                  endScript: [
                    [
                      <span className="gray">
                        10년뒤, 판교의 한 회사의 최상층으로 {state[0].userName}{" "}
                        를 찾아갔다.
                      </span>,
                      <span className="gray">
                        {state[0].userName}! 어떻게 된거야!!
                      </span>,
                      <span className="gray">
                        {state[0].userName}는 "양디컴퍼니"의 CEO가 되어있었다.
                      </span>,
                      "부모님. 이 영광을 당신께 돌리겠습니다. 양디컴퍼니는 부모님 것입니다.",
                      "엔딩 3 : 은혜갚은 CEO 엔딩",
                    ],
                  ],
                },
              },
            ]);
          } else if (maxArr.indexOf(Math.max(...maxArr)) === 1) {
            stateHandler([
              {
                index: 4,
                properties: {
                  goEnd: true,
                  endCode: 4,
                  endScriptIdx: 0,
                  endScript: [
                    [
                      <span className="gray">
                        4년뒤, 유명 인서울 대학병원으로 {state[0].userName} 를
                        찾아갔다.
                      </span>,
                      <span className="gray">
                        {state[0].userName}! 여기.. 있었구나
                      </span>,
                      <span className="gray">
                        {state[0].userName}는 유명 대학병원 원장이 되어있었다.
                      </span>,
                      "부모님은..죽지 않아요!",
                      "엔딩 4 : 명의 - 메르시 의사 엔딩",
                    ],
                  ],
                },
              },
            ]);
          } else if (maxArr.indexOf(Math.max(...maxArr)) === 2) {
            stateHandler([
              {
                index: 4,
                properties: {
                  goEnd: true,
                  endCode: 5,
                  endScriptIdx: 0,
                  endScript: [
                    [
                      <span className="gray">
                        4년뒤, 한 드라마 촬영장으로 {state[0].userName} 를
                        찾아갔다.
                      </span>,
                      <span className="gray">
                        {state[0].userName}! 너였구나!
                      </span>,
                      <span className="gray">
                        {state[0].userName}는 누구나 알법한 유명 인플루언서가
                        되어있었다.
                      </span>,
                      "여러분! 여길 봐주세요! 이분이 저를 길러주신 부모님이십니다! 많은 환호 부탁드려요!",
                      "엔딩 5 : 부모랑 나랑~ 인플루언서 엔딩",
                    ],
                  ],
                },
              },
            ]);
          } else if (maxArr.indexOf(Math.max(...maxArr)) === 3) {
            stateHandler([
              {
                index: 4,
                properties: {
                  goEnd: true,
                  endCode: 6,
                  endScriptIdx: 0,
                  endScript: [
                    [
                      <span className="gray">
                        8년뒤, 올림픽 경기장으로 {state[0].userName} 를
                        찾아갔다.
                      </span>,
                      <span className="gray">
                        {state[0].userName}! 너였구나!
                      </span>,
                      <span className="gray">
                        {state[0].userName}는 금메달 2연패에 빛나는 육상선수가
                        되어있었다.
                      </span>,
                      "내 왼손에는 금메달~ 오른손에는 트로피~ 누구도 내 속도를 따라오지 못해!",
                      "엔딩 6 : 속도의 한계를 넘어. 육상선수 엔딩",
                    ],
                  ],
                },
              },
            ]);
          }
        } else {
          stateHandler([
            {
              index: 4,
              properties: {
                goEnd: true,
                endCode: 2,
                endScriptIdx: 0,
                endScript: [
                  [
                    <span className="gray">
                      5년뒤, 판교의 한 회사로 {state[0].userName} 를 찾아갔다.
                    </span>,
                    <span className="gray">{state[0].userName}! 안녕!</span>,
                    <span className="gray">
                      {state[0].userName}는 한 중견기업의 대리로 회사를 다니고
                      있었다.
                    </span>,
                    "그래. 남들처럼만 건강하게 살아다오. 내 일평생의 부탁이란다.",
                    "엔딩 2 : 그저 남들처럼만. 회사원 엔딩",
                  ],
                ],
              },
            },
          ]);
        }
      } else if (
        state[3].money + money >= 10000 ||
        state[3].study + study >= 40 ||
        state[3].friend + friend >= 40 ||
        state[3].strength + strength >= 40
      ) {
        const maxArr = [
          parseInt((state[3].money + money) / 200),
          parseInt(state[3].study + study),
          parseInt(state[3].friend + friend),
          parseInt(state[3].strength + strength),
        ];
        console.log(Math.max(...maxArr));
        if (Math.max(...maxArr) >= 70) {
          if (maxArr.indexOf(Math.max(...maxArr)) === 0) {
            stateHandler([
              {
                index: 4,
                properties: {
                  goEnd: true,
                  endCode: 7,
                  endScriptIdx: 0,
                  endScript: [
                    [
                      <span className="gray">
                        7년뒤, 강원의 한 랜드로 {state[0].userName} 를 찾아갔다.
                      </span>,
                      <span className="gray">
                        {state[0].userName}! 어떻게 된거야!!
                      </span>,
                      <span className="gray">
                        {state[0].userName}는 도박의 신이 되어있었다.
                      </span>,
                      "부모님. 카드 한장 뽑아보시죠. 제가 승리로 이끌어드리겠습니다.",
                      <span className="gray">
                        당신은 그말을 애써 무시한채 그대로 돌아나왔다.
                      </span>,
                      <span className="gray">
                        '난 너가 그런길로 빠지길 바란게 아니다..'
                      </span>,
                      "엔딩 7 : 미운오리 도박꾼 엔딩",
                    ],
                  ],
                },
              },
            ]);
          } else if (maxArr.indexOf(Math.max(...maxArr)) === 1) {
            stateHandler([
              {
                index: 4,
                properties: {
                  goEnd: true,
                  endCode: 8,
                  endScriptIdx: 0,
                  endScript: [
                    [
                      <span className="gray">
                        4년뒤, 유명 인서울 대학교로 {state[0].userName} 를
                        찾아갔다.
                      </span>,
                      <span className="gray">
                        {state[0].userName}! 여기 있었구나..
                      </span>,
                      <span className="gray">
                        {state[0].userName}는 충실한 대학원생이 되어있었다.
                      </span>,
                      "더 깊은 지식을 연구하는것도 좋지만, 돈을 버는게 더 좋지 않겠니...?",
                      "엔딩 8 : 노-예 대학원생 엔딩",
                    ],
                  ],
                },
              },
            ]);
          } else if (maxArr.indexOf(Math.max(...maxArr)) === 2) {
            stateHandler([
              {
                index: 4,
                properties: {
                  goEnd: true,
                  endCode: 9,
                  endScriptIdx: 0,
                  endScript: [
                    [
                      <span className="gray">
                        3년뒤, 홍대의 한 클럽으로 {state[0].userName} 를 잡으러?
                        갔다.
                      </span>,
                      <span className="gray">
                        {state[0].userName}! 너 또 여기왔니?
                      </span>,
                      <span className="gray">
                        {state[0].userName}는 홍대 클럽에서 헌팅 전문가가
                        되어있었다.
                      </span>,
                      "니 여자는 이제 내껍니다. 내 마음대로 할 수 있다는 겁니다.",
                      <span className="gray">그래... 너가 행복하다면야</span>,
                      "엔딩 9 : 카사노바 클러버 엔딩",
                    ],
                  ],
                },
              },
            ]);
          } else if (maxArr.indexOf(Math.max(...maxArr)) === 3) {
            stateHandler([
              {
                index: 4,
                properties: {
                  goEnd: true,
                  endCode: 10,
                  endScriptIdx: 0,
                  endScript: [
                    [
                      <span className="gray">
                        8년뒤, 김포공항으로 {state[0].userName} 를 찾아갔다.
                      </span>,
                      <span className="gray">
                        {state[0].userName}! 나야 나!
                      </span>,
                      <span className="gray">
                        {state[0].userName}는 SYP 전속 경호팀장이 되어있었다.
                      </span>,
                      "비키세요! 비키세요! 사생팬에게 자비는 없습니다!",
                      <span className="gray">
                        {state[0].userName}애가 듬직..하니 좋네..ㅎㅎ
                      </span>,
                      "엔딩 10 : 단단-묵-직 경호원 엔딩",
                    ],
                  ],
                },
              },
            ]);
          }
        } else {
          stateHandler([
            {
              index: 4,
              properties: {
                goEnd: true,
                endCode: 11,
                endScriptIdx: 0,
                endScript: [
                  [
                    <span className="gray">
                      10년뒤, 서현의 한 옥탑방으로 {state[0].userName} 를
                      찾아갔다.
                    </span>,
                    <span className="gray">{state[0].userName}! 문열어!</span>,
                    <span className="gray">
                      {state[0].userName}는.... 안타깝게도 백수로 살고 있었다.
                    </span>,
                    "저도 저 나름대로 노력하고 있으니까, 이제 제발 그만오세요.",
                    <span className="gray">
                      당신은 매정한 {state[0].userName} 의 말을 비웃듯
                      코웃음친다.
                    </span>,
                    <span className="gray">그리고선, 뒤돌아 사라진다.</span>,
                    "엔딩 11 : 자유가 최고야 백수 엔딩",
                  ],
                ],
              },
            },
          ]);
        }
      } else {
        stateHandler([
          {
            index: 4,
            properties: {
              goEnd: true,
              endCode: 12,
              endScriptIdx: 0,
              endScript: [
                [
                  <span className="gray">
                    12년뒤, 서현의 한 교회로 {state[0].userName} 를.. 만나러
                    간다.
                  </span>,
                  <span className="gray">{state[0].userName}!....</span>,
                  <span className="gray">
                    {state[0].userName}는.... 더이상 우리가 알던 그자가
                    아니었다.
                  </span>,
                  "신이..우리를 구원하신다! 태양만세! 태양만세! 우리의 신이 곧 세상을 목도하신다!",
                  <span className="gray">
                    당신은 이미 흐려진 그의 눈을 보며 나지막히 이야기 한다.
                  </span>,
                  <span className="gray">
                    `잘 키워주지 못해.. 미안하구나..`
                  </span>,
                  "엔딩 12 : 광란의 이교도(사이비) 엔딩",
                ],
              ],
            },
          },
        ]);
      }
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
    ],
    [
      "역시 돈 벌려면 알바가 최고지",
      "근데 무슨 알바 해야하지?",
      `그래. ${
        state[3].study > 60
          ? "과외 알바를 하면 딱 좋겠다!"
          : state[3].friend >= 60
          ? "클럽 알바를 하면 딱 좋겠다!"
          : state[3].strength >= 60
          ? "공사장 알바를 하면 딱 좋겠다!"
          : state[3].money >= 10000
          ? "있는 돈으로 주식이나 좀 해볼까...?이거야~!"
          : "편의점 알바나 해야지 뭐..."
      }`,
      state[3].study >= 60
        ? "(돈 +5000, 공부 +10, 인싸력 -10, 불만지수 +35)"
        : state[3].strength >= 60
        ? "(돈 +3500, 인싸력 -10, 체력 +15, 불만지수 +50)"
        : state[3].friend >= 60
        ? "(돈 +4000, 공부 -5, 인싸력 +10, 체력 -10, 불만지수 +35)"
        : state[3].money >= 7000
        ? "(돈 +보유금 비례, 인싸력 -15, 체력 -5, 불만지수 +30)"
        : "(돈 +1000, 공부 -5, 인싸력 -5, 체력 -5, 불만지수 +40)",
    ],
    [
      "그래. 이제 스터디카페 가서 공부좀 해봐야지.",
      "근데.. 어떻게 공부를 하지?",
      state[3].happy > 180
        ? "아ㅏ 짜증나니까 공부도 안되네 걍 때려치고 노래방이나 가야지."
        : state[3].study > 70
        ? "그래! 계획해 놓은대로 공부해서 전교 1등을 차지하겠다!"
        : state[3].study > 35
        ? "흠.. 잘모르겠지만 대충은 알겠네. 커피먹고 더 해야겠다."
        : "아잇 모르겠다 ..- 1등아 이거 어떻게 하는거야ㅏㅓ??",
      state[3].happy > 180
        ? "(돈 -1250, 체력 -10.... 돈만 날렸다...)"
        : state[3].study > 70
        ? "(돈 -500, 공부 +20, 체력 -10, 불만지수 +20)"
        : state[3].study > 35
        ? "(돈 -900, 공부 +15, 체력 -10,불만지수 +30)"
        : "(돈 -1000, 공부 +25, 인싸력 +5, 체력 -15, 불만지수 +25)",
    ],
    [
      "으..몸도 찌뿌둥한데 가서 헬스나 해야겠다.",
      "오늘은 어디를 조져볼까?",
      state[3].happy > 185
        ? "하ㅏㅏ 이 스트레스를 풀어야 겠다. 풀업 300개 가즈아ㅏ"
        : state[3].money > 14000
        ? "PT 쌤 잘 부탁드립니다 ^^ 오늘은 어디부터 할까요?"
        : state[3].strength > 60
        ? "ㅇㅋ 오늘은 하체 조진다 중량스쿼트 딱대"
        : "아.. 다칠거 같은디.. 일단 살살 해야겠다.",
      state[3].happy > 185
        ? state[3].randEvent > 0.5
          ? "(돈 -4000, 체력 -15, 불만지수 +80.. 크게 다쳐버렸다..)"
          : "(돈 -1200, 인싸력 +5, 체력 +30, 불만지수 -50. 운동 대성공!)"
        : state[3].money > 14000
        ? "(돈 -4400, 인싸력 +5, 체력 +20, 불만지수 -35)"
        : state[3].strength > 45
        ? "(돈 -1200, 체력 +30, 공부 -10, 인싸력 -5,불만지수 -35)"
        : "(돈 -1200, 체력 +25, 공부 -5, 인싸력 -5, 불만지수 -25)",
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
          : "(돈 -1600, 인싸력 +30, 체력 -10, 불만지수 -65. 여자 번호땄다!)"
        : state[3].friend > 90
        ? "(돈 -2500, 공부 -10, 인싸력 +100, 체력 -15, 불만지수 -80)"
        : state[3].friend > 40
        ? "(돈 -1600, 인싸력 +20, 체력 -5, 불만지수 -35)"
        : "(돈 -1600, 인싸력 +10, 체력 -5, 불만지수 +40)",
    ],
    [
      "하 C바 학교 가야되네. 가기 싫다가기 싫다가기 싫",
      "그래도 가야지...무어 어쩌겠어..",
      state[3].happy > 180
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
      state[3].happy > 180
        ? state[3].randEvent < 0.25
          ? "(모든 스택 최저치로 감소. 학교폭력 가해자로 처벌 받았습니다.)"
          : "(공부 +5, 인싸력 +5, 불만지수 -35.. 상담사에게 상담받았습니다...)"
        : state[3].money > 13000
        ? "(돈 -1000, 인싸력 -5, 공부 -5, 불만지수 -45)"
        : state[3].friend > 75
        ? "(돈 +1500, 인싸력 +15, 공부 -5, 체력 -15, 불만지수 -30)"
        : state[3].strength > 80
        ? state[3].happy > 160
          ? "(돈 -600, 공부/인싸력 -5, 불만지수 -10)"
          : "(공부 -5, 인싸력 -5, 체력 +25, 불만지수 +20)"
        : state[3].study > 80
        ? state[3].friend > 70
          ? "(돈 +3000, 공부 +15, 인싸력 +10, 체력 -20, 불만지수 -45)"
          : state[3].friend < 20 && state[3].money < 10000
          ? "(돈 +300, 공부 +5, 체력 -10, 인싸력 -5, 불만지수 +25)"
          : "(공부 +20, 체력-5, 인싸력 -5, 불만지수 +15)"
        : "(돈 제외 모두 +5, 불만지수 +20)",
    ],
    [
      "...............",
      state[3].randEvent < 0.2
        ? "...감히....날 버리려고 해?"
        : state[3].randEvent < 0.5
        ? "부모님...어디 갔어요....."
        : state[3].randEvent < 0.9
        ? "그래..이럴 시간에 뭐라도 해야지"
        : ".........아무일도 없었다.",
      state[3].randEvent < 0.2
        ? ""
        : state[3].randEvent < 0.5
        ? "(돈 -500, 모든스탯 -10, 불만지수 +20)"
        : state[3].randEvent < 0.9
        ? "(돈 +500, 모든스탯 +5, 불만지수 -15)"
        : ".........아무일도 없었다.",
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
        ? "(돈 +1500, 공부,인싸력 -5, 체력 +10, 불만지수 -70)"
        : state[3].friend > 70 && state[3].happy < 90
        ? "(돈 -1000, 인싸력 +15, 체력 -5, 불만지수 -80"
        : "(돈 -2500, 공부,인싸력 +5, 체력 -10, 불만지수 -40)",
    ],
    [
      "아이.. 그냥 잠이나 자야겠다 뭔일이냐",
      state[3].happy > 160
        ? state[3].randEvent > 0.33
          ? "어웅 너무 잘잤다~~ 스트레스가 쫙 풀리네"
          : "아..진짜 잠을 한숨도 못잤네...18"
        : state[3].happy < 50
        ? "흐아! 아.. 정말 아름다운 꿈이었는데..."
        : state[3].randEvent < 0.7
        ? "어우..7시네.."
        : state[3].randEvent < 0.8
        ? "어우...어머 ㅅㅂ 누구세요 도둑이야!!"
        : state[3].randEvent < 0.98
        ? "으아ㅏㅏ... 후아...다시는 꾸기 싫은 악몽이었어."
        : "예? 할머니 그 로또번호가... 5, 14,21,...",
      state[3].happy > 160
        ? state[3].randEvent > 0.33
          ? "(체력 +5, 불만지수 -50)"
          : "(불만지수 +60)"
        : state[3].happy < 50
        ? "(공부 +5, 체력 +5, 불만지수 -10)"
        : state[3].randEvent < 0.7
        ? "( 인싸력 -5 )"
        : state[3].randEvent < 0.8
        ? "(돈 -3500, 인싸력 -5, 체력 -10, 불만지수 +35)"
        : state[3].randEvent < 0.98
        ? "(공부 -5, 인싸력 -10, 체력 -5)"
        : "*(돈 + 50000 축하드립니다!!!!!)*",
    ],
    [
      "PC방? 못참지 바로 드가자",
      state[3].money < 3500
        ? "으웩. 저가 피시방이라 담배 연기가 너무 많ㅇ.. 콜록콜록"
        : state[3].happy > 100
        ? "스트레스 다 풀릴때까지 하고 간다 넌 나 못막아 ㅆㅂ"
        : state[3].randEvent > 0.5
        ? "승리~ 빠-바밤~~~빠-바-바-바~~바---밤"
        : "아쉽게 졌네,,, 뭐 아쉬운거지",
      state[3].money < 3500
        ? "(돈 -500, 인싸력 -10, 체력 -10, 불만지수 +15)"
        : state[3].happy > 100
        ? `(돈 ${-((1000 * Math.ceil(state[3].happy - 100)) / 20)}, 인싸력 ${-(
            (5 * Math.ceil(state[3].happy - 100)) /
            20
          )}, 체력 ${-((5 * Math.ceil(state[3].happy - 100)) / 20)}, 
          불만지수 = 100)`
        : state[3].randEvent > 0.5
        ? "(돈 -1000, 체력 -10, 불만지수 +15)"
        : "(돈 -1000, 체력 -10, 불만지수 -15)",
    ],
    [
      "하잇 산책이나 나가볼까",
      state[3].randEvent < 0.2
        ? state[3].strength >= 75
          ? "어! 저건 지명수배자! 내가 떄려눕혀서 현상금 2000원 먹어야지!"
          : "어! 저건 지명수배자! 도망쳐야겠다;;"
        : state[3].randEvent < 0.4
        ? "아무일도... 없었다."
        : state[3].randEvent < 0.6
        ? "엌 일진한테 2500원 뺏겼다!"
        : state[3].randEvent < 0.8
        ? "어 티모가 왜 여깄어? 앜 독버섯 티모다 (돈 -500, 모든 스탯 -5)"
        : "어 유미가 왜 여깄지? 오 착한 유미였구나 (돈 +500, 모든 스탯 +5)",
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
          state[3].study >= 60
            ? updateState(5000, 10, -10, 0, 35)
            : state[3].strength >= 60
            ? updateState(3500, 0, -10, 15, 50)
            : state[3].friend >= 60
            ? updateState(4000, -5, 10, -10, 35)
            : state[3].money >= 10000
            ? updateState(
                parseInt(Math.random() * (state[3].money / 10) + 3000),
                0,
                -15,
                -5,
                30
              )
            : updateState(1000, -5, -5, -5, 40),
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
          state[3].happy > 180
            ? updateState(-1250, 0, 0, -10, 0)
            : state[3].study > 70
            ? updateState(-750, 20, 0, -10, 20)
            : state[3].study > 35
            ? updateState(-900, 15, 0, -10, 30)
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
          state[3].happy > 185
            ? state[3].randEvent > 0.5
              ? updateState(-4000, 0, 0, -15, 80)
              : updateState(-1200, 0, 5, 30, -50)
            : state[3].money > 14000
            ? updateState(-4400, 0, 5, 20, -35)
            : state[3].strength > 45
            ? updateState(-1200, -10, -5, 30, -35)
            : updateState(-1200, -5, -5, 25, -25),
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
            ? updateState(2500, -10, 100, -15, -70)
            : state[3].friend > 40
            ? updateState(-1600, 0, 20, 5, -35)
            : updateState(-1600, 0, 10, 0, 40),
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
          state[3].happy > 180
            ? state[3].randEvent < 0.1
              ? updateState(-20000, -100, -100, -100, 1000)
              : updateState(0, 5, 5, 0, -35)
            : state[3].money > 13000
            ? updateState(-1000, -5, -5, 0, -45)
            : state[3].friend > 75
            ? updateState(1500, -5, 15, -15, -30)
            : state[3].strength > 80
            ? state[3].happy > 160
              ? updateState(-600, -5, -5, 0, -10)
              : updateState(0, -5, -5, 25, 20)
            : state[3].study > 80
            ? state[3].friend > 70
              ? updateState(3500, 15, 10, -20, -45)
              : state[3].friend < 20 && state[3].money < 10000
              ? updateState(300, 5, -10, -5, 25)
              : updateState(0, 20, -5, -5, 10)
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
          state[3].randEvent < 0.2
            ? updateState(0, 0, 0, 0, 10000)
            : state[3].randEvent < 0.5
            ? updateState(-500, -10, -10, -10, 20)
            : state[3].randEvent < 0.9
            ? updateState(500, 5, 5, 5, -15)
            : updateState(0, 0, 0, 0, 0),
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
  const onSleep = (e) => {
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
        index: 3,
        properties:
          state[3].happy > 160
            ? state[3].randEvent > 0.33
              ? updateState(0, 0, -5, 5, -50)
              : updateState(0, 0, -5, 0, 60)
            : state[3].happy < 50
            ? updateState(0, 5, -5, 5, -10)
            : state[3].randEvent < 0.7
            ? updateState(0, 0, -5, 0, 0)
            : state[3].randEvent < 0.8
            ? updateState(-3500, 0, -5, -10, 35)
            : state[3].randEvent < 0.98
            ? updateState(0, -5, -10, -5, 0)
            : updateState(50000, 0, 0, 0, 0),
      },
      {
        index: 2,
        properties: { currIndex: 0, script: reloadingScript },
      },
    ]);
  };
  const onComputer = (e) => {
    stateHandler([
      {
        index: 1,
        properties: { typeNum: 10 },
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
          state[3].money < 3500
            ? updateState(-500, 0, -10, -10, 15)
            : state[3].happy > 100
            ? updateState(
                -((1000 * Math.ceil(state[3].happy - 100)) / 20),
                0,
                -((5 * Math.ceil(state[3].happy - 100)) / 20),
                -((5 * Math.ceil(state[3].happy - 100)) / 20),
                -(state[3].happy - 100)
              )
            : state[3].randEvent > 0.5
            ? updateState(-1000, 0, 0, -10, 15)
            : updateState(-1000, 0, 0, -10, -15),
      },
      {
        index: 2,
        properties: { currIndex: 0, script: reloadingScript },
      },
    ]);
  };
  const onEvent = (e) => {
    stateHandler([
      {
        index: 1,
        properties: { typeNum: 11 },
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
          state[3].randEvent < 0.2
            ? state[3].strength >= 75
              ? updateState(2000, 0, 0, 0, 0)
              : updateState(0, 0, 0, 0, 10)
            : state[3].randEvent < 0.4
            ? updateState(0, 0, 0, 0, 0)
            : state[3].randEvent < 0.6
            ? updateState(-2500, 0, 0, 0, 0)
            : state[3].randEvent < 0.8
            ? updateState(-500, -5, -5, -5, -5)
            : updateState(500, 5, 5, 5, 5),
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
        <Button variant="dark" onClick={onSleep}>
          잠자기
        </Button>
        <Button variant="dark" onClick={onComputer}>
          PC방가기
        </Button>
        <Button variant="dark" onClick={onEvent}>
          산책하기
        </Button>
      </div>
    </Fragment>
  );
};

export default Choose;

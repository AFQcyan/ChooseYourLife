import { Fragment, useState } from "react";
// Modules
import Start from "./components/Start.jsx";
import Story from "./components/Story.jsx";
// resources

function App() {
  const [state, setState] = useState([
    {
      // index 0 : 이름 텍스트!
      userName: "Your name",
      nameInputed: false,
    },
    {
      // index 1 : 현재 페이지
      currentPage: "Start",
      typeNum: 0,
    },
    {
      //index 2 : 대사 스크립트
      currIndex: 0,
      currScript: 0,
      script: [["기본 스크립트", "기본스크립트2"], []],
    },
    {
      //index 3 : Status
      prevGameMonth: 10,
      gameMonth: 10,
      money: 3000,
      study: 20,
      friend: 20,
      strength: 30,
      happy: 10,
    },
  ]);

  const stateHandler = (updates) => {
    setState((prevState) => {
      const newState = [...prevState];

      updates.forEach((update) => {
        const { index, properties } = update;
        newState[index] = {
          ...newState[index],
          ...properties,
        };
      });

      console.log(newState);

      return newState;
    });
  };

  return (
    <Fragment>
      <Start state={state} stateHandler={stateHandler} />
      <Story state={state} stateHandler={stateHandler} key={0}></Story>
    </Fragment>
  );
}

export default App;

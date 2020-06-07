import React, { useState, useEffect } from "react";

// import GameStart from './GameStart'

const App = (props) => {
  const [state, setState] = useState(props);
  const { deck, reincarnation, myHand, yourHand, turn } = state;

  useEffect(() => {
    console.log(
      "useEffectのログ：　　myHand is :" + myHand + "  yourHand is :" + yourHand
    );
    Judgment_WinLoss(deck.length);
  });

  function Judgment_WinLoss(Deck_length) {
    if (Deck_length === 0) {
      if (myHand === yourHand) {
        console.log("引き分けです");
      } else if (myHand > yourHand) {
        console.log("あなたの勝ちです");
      } else {
        console.log("あなたの負けです");
      }
    } else {
      return;
    }
  }

  const GameStart = ({ state }) => {
    function shuffle([...array]) {
      for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const PushGameStart = (e) => {
      e.preventDefault();

      const shuffleDeck = shuffle(state.deck);
      const copyReincarnation = shuffleDeck.pop();
      const myDrawCard = shuffleDeck.pop();
      const yourDrawCard = shuffleDeck.pop();

      setState({
        ...state,
        deck: shuffleDeck,
        reincarnation: copyReincarnation,
        myHand: myDrawCard,
        yourHand: yourDrawCard,
        turn: "自分のターン",
      });
    };
    return (
      <>
        <button onClick={PushGameStart}>ゲームを開始する</button>
        <div>ゲーム開始後のデッキ：{deck}</div>
      </>
    );
  };

  const DrawCard = ({ state }) => {
    const PushDrawCard = (e) => {
      e.preventDefault();
      const copyDeck = deck.slice();

      if (turn === "自分のターン") {
        const myDrawCard = copyDeck.pop();

        setState({
          ...state,
          deck: copyDeck,
          myHand: myDrawCard,
          turn: "相手のターン",
        });
      } else {
        const yourDrawCard = copyDeck.pop();

        setState({
          ...state,
          deck: copyDeck,
          yourHand: yourDrawCard,
          turn: "自分のターン",
        });
      }
    };

    return (
      <>
        <button onClick={PushDrawCard}>ドローする</button>
        <div>ドロー後のデッキ：{deck}</div>
      </>
    );
  };

  return (
    <>
      <div>[カード表示]</div>
      <div>デッキ：{deck}</div>
      <div>転生札：{reincarnation}</div>
      <div>自分の手札：{myHand}</div>
      <div>相手の手札：{yourHand}</div>
      <div>　　</div>
      <div>[ターン表示]</div>
      <div>現在のターン：{turn}</div>
      <div>
        <GameStart state={state} />
        <DrawCard state={state} />
      </div>
    </>
  );
};

App.defaultProps = {
  deck: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10],
  reincarnation: 0,
  myHand: [],
  yourHand: [],
  turn: "ゲーム開始前",
};

export default App;

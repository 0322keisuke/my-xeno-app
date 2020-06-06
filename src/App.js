import React, { useState, useEffect } from "react";

const App = () => {
  const cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10];
  //const cards = [1, 2, 3, 4, 5];  //test用
  const [deck, setDeck] = useState(cards);
  const [reincarnation, setReincarnation] = useState(0);
  const [myHand, setMyHand] = useState([]);
  const [yourHand, setYourHand] = useState([]);
  const [turn, setTurn] = useState("ゲーム開始前");

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

  const GameStart = () => {
    function shuffle([...array]) {
      for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const PushGameStart = (e) => {
      e.preventDefault();

      const shuffleDeck = shuffle(deck);
      const copyReincarnation = shuffleDeck.pop();
      const myDrawCard = shuffleDeck.pop();
      const yourDrawCard = shuffleDeck.pop();

      setDeck(shuffleDeck);
      setReincarnation(copyReincarnation);
      setMyHand(myDrawCard);
      setYourHand(yourDrawCard);
      setTurn("自分のターンです");
    };
    return (
      <>
        <button onClick={PushGameStart}>ゲームを開始する</button>
        <div>ゲーム開始後のデッキ：{deck}</div>
      </>
    );
  };

  const DrawCard = () => {
    const PushDrawCard = (e) => {
      e.preventDefault();
      const copyDeck = deck.slice();

      if (turn === "自分のターンです") {
        const myDrawCard = copyDeck.pop();

        setDeck(copyDeck);
        setMyHand(myDrawCard);
        // カードの効果を発動
        setTurn("相手のターンです");
      } else {
        const yourDrawCard = copyDeck.pop();

        setDeck(copyDeck);
        setYourHand(yourDrawCard);
        // カードの効果を発動
        setTurn("自分のターンです");
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
        <GameStart />
        <DrawCard />
      </div>
    </>
  );
};

export default App;

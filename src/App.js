import React, { useState } from "react";

const App = () => {
  const cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10];
  const [deck, setDeck] = useState(cards);
  const [reincarnation, setReincarnation] = useState(0);
  const [myHand, setMyHand] = useState([]);
  const [yourHand, setYourHand] = useState([]);

  const ShuffleDeckButton = () => {
    function shuffle([...array]) {
      for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const ShuffleDeck = (e) => {
      e.preventDefault();

      const newDecks = shuffle(deck);
      setDeck(newDecks);

      return newDecks[newDecks.length - 1];
    };

    return <button onClick={ShuffleDeck}>デッキをシャッフル</button>;
  };

  const GameStart = () => {
    const PushGameStart = (e) => {
      e.preventDefault();

      const copyDeck = deck;
      const copyReincarnation = copyDeck.pop();

      setDeck(copyDeck);
      setReincarnation(copyReincarnation);
    };
    return <button onClick={PushGameStart}>ゲームを開始する</button>;
  };

  const DrawFromDeck = () => {
    const PushDrawFromDeck = (e) => {
      e.preventDefault();

      const copyDeck = deck;
      const myDrawCard = copyDeck.pop();
      const yourDrawCard = copyDeck.pop();

      setDeck(copyDeck);
      setMyHand(myDrawCard);
      setYourHand(yourDrawCard);
    };
    return (
      <>
        <button onClick={PushDrawFromDeck}>デッキから１枚引く</button>
        <div>DrawDeck後のデッキ：{deck}</div>
      </>
    );
  };

  return (
    <>
      <div>[カード表示]</div>
      <div>デッキ：{deck}</div>
      {/* <div>デッキの１番上：{deck[deck.length - 1]}</div> */}
      <div>転生札：{reincarnation}</div>
      <div>自分の手札：{myHand}</div>
      <div>相手の手札：{yourHand}</div>
      <div>　　</div>
      <div>
        <ShuffleDeckButton />
        <GameStart />
        <DrawFromDeck />
      </div>
    </>
  );
};

export default App;

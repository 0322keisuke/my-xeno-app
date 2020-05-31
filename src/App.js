import React, { useState } from "react";

const App = () => {
  const cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10];
  const [deck, setDeck] = useState(cards);
  const [reincarnation, setReincarnation] = useState(0);
  const [hand, setHand] = useState(0);
  // const lastCard = deck[deck.length-1];

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
    //const lastCard = ShuffleDeck();
    // setDeck(deck.pop());
    console.log("deck=", deck);
    //console.log("lastCard=",lastCard);
  };

  const Test = (props) => {
    return <div>デッキ２: {deck} </div>;
  };

  return (
    <>
      <div>[カード表示]</div>
      <div>デッキ：{deck}</div>
      {/* <div>デッキの１番上：{deck[deck.length - 1]}</div> */}
      <div>転生札：{reincarnation}</div>
      <div>手札：{hand}</div>
      <div>　</div>
      <div>
        <ShuffleDeckButton />
        <GameStart />
        <button onClick={DrawFromDeck}>デッキから１枚引く</button>
        <Test name="Props" />
      </div>
    </>
  );
};

export default App;

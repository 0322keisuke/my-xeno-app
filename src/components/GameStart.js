// import React, { useState } from "react";

// const GameStart = () => {
//   function shuffle([...array]) {
//     for (let i = array.length - 1; i >= 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }

//   const PushGameStart = (e) => {
//     e.preventDefault();

//     const shuffleDeck = shuffle(deck);
//     const copyReincarnation = shuffleDeck.pop();
//     const myDrawCard = shuffleDeck.pop();
//     const yourDrawCard = shuffleDeck.pop();

//     setDeck(shuffleDeck);
//     setReincarnation(copyReincarnation);
//     setMyHand(myDrawCard);
//     setYourHand(yourDrawCard);
//     setTurn("自分のターン");
//   };
//   return (
//     <>
//       <button onClick={PushGameStart}>ゲームを開始する</button>
//       <div>ゲーム開始後のデッキ：{deck}</div>
//     </>
//   );
// };

// export default GameStart;
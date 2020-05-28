import React,{ useState } from 'react';

const App = () => {

  const cards = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8','9','10'];
  const [deck, setDeck] = useState(cards);
  const [hand, setHand] = useState(0);
  // const lastCard = deck[deck.length-1];

  const ShuffleDeck = () => {
    const newCards = shuffle(deck);
    const lastCard = newCards[newCards.length-1];
    
    setDeck(newCards);

    return lastCard;
  }

  const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  } 

  const DrawFromDeck = () => {
    const lastCard = ShuffleDeck();
    // setDeck(deck.pop());
    console.log("deck=",deck) ;
    console.log("lastCard=",lastCard);
  }

  return (
    <>
      <div>カード表示２</div>
      <div>デッキ：{deck[deck.length-1]}</div> 
      <div>手札：{hand}</div>
      <div>
        <button onClick={ShuffleDeck}>デッキをシャッフル</button>
        <button onClick={DrawFromDeck}>デッキから１枚引く</button> 
      </div>
    </>
  )
}

export default App;

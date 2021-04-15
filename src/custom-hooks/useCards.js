import { useReducer, useState } from "react";
import { cardsReducer } from "Store/cardStore";

const useCards = ({ initialCards = [] }) => {
  const [cards, dispatch] = useReducer(cardsReducer, initialCards);
  const [currentCard, setCurrentCard] = useState({});

  return {
    cards,
    dispatch,
    currentCard,
    setCurrentCard,
  };
};

export default useCards;

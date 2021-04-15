import { useState, useEffect, useCallback } from "react";
import Layout from "Components/Layout";
import Card from "Components/Card";
import EndGame from "Components/EndGame";
import styles from "./index.module.css";
import { ACTIONS, initialCards } from "Store/cardStore";
import { useCards } from "Hooks";
import { FLIP_CARDS_TIME } from "Constants";

const Game = () => {
  const [showingCards, setShowingCards] = useState(false);
  const [playTime, setPlayTime] = useState(new Date().getTime());
  const [endGame, setEndGame] = useState(false);
  const { cards, dispatch, currentCard, setCurrentCard } = useCards({
    initialCards,
  });

  useEffect(() => {
    if (cards.filter((card) => !card.complete).length === 0) {
      setEndGame(true);
    }
  }, [cards]);

  const handleCardClick = useCallback(
    (index) => {
      if (showingCards) return;

      const clickedCard = cards[index];
      if (clickedCard.flipped) return;

      if (Object.entries(currentCard).length) {
        if (clickedCard.image === currentCard.image) {
          dispatch({ type: ACTIONS.completeCard, index });
          dispatch({ type: ACTIONS.completeCard, index: currentCard.index });
          setCurrentCard({});
        } else {
          dispatch({ type: ACTIONS.flipCard, payload: { index, flip: true } });
          setShowingCards(true);
          setTimeout(() => {
            dispatch({
              type: ACTIONS.flipCard,
              payload: { index, flip: false },
            });
            dispatch({
              type: ACTIONS.flipCard,
              payload: { index: currentCard.index, flip: false },
            });
            setCurrentCard({});
            setShowingCards(false);
          }, FLIP_CARDS_TIME);
        }
      } else {
        setCurrentCard(clickedCard);
        dispatch({ type: ACTIONS.flipCard, payload: { index, flip: true } });
      }
    },
    [currentCard, setCurrentCard, showingCards, cards, dispatch]
  );

  const handleTryAgain = () => {
    setEndGame(false);
    dispatch({ type: ACTIONS.reloadCards });
    setPlayTime(new Date().getTime());
  };

  return (
    <Layout>
      <ul className={styles.game}>
        {cards.map((card, index) => (
          <li key={index}>
            <Card
              index={index}
              image={card.image}
              flipped={card.flipped}
              complete={card.complete}
              onClick={handleCardClick}
            />
          </li>
        ))}
      </ul>
      {endGame && (
        <EndGame handleTryAgain={handleTryAgain} playTime={playTime} />
      )}
    </Layout>
  );
};

export default Game;

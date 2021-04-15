import Thumb1 from "Images/thumb-1.png";
import Thumb2 from "Images/thumb-2.png";
import Thumb3 from "Images/thumb-3.png";
import Thumb4 from "Images/thumb-4.png";
import Thumb5 from "Images/thumb-5.png";
import Thumb6 from "Images/thumb-6.png";
import Thumb7 from "Images/thumb-7.png";
import Thumb8 from "Images/thumb-8.png";
import Thumb9 from "Images/thumb-9.png";

export const ACTIONS = {
  flipCard: "FLIP_CARD",
  completeCard: "COMPLETE_CARD",
  reloadCards: "REALOAD_CARDS",
};

const imageList = [
  Thumb1,
  Thumb2,
  Thumb3,
  Thumb4,
  Thumb5,
  Thumb6,
  Thumb7,
  Thumb8,
  Thumb9,
];

const shufflingCards = () => {
  const cardsList = [...imageList, ...imageList].sort(() => Math.random() - 0.5);
  return cardsList.map((image, index) => ({
    index,
    image,
    flipped: false,
    complete: false,
  }));
}

export const initialCards = shufflingCards();

export const cardsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.flipCard:
      return state.map((card, i) =>
        i === action.payload.index
          ? { ...card, flipped: action.payload.flip }
          : card
      );
    case ACTIONS.completeCard:
      return state.map((card, i) =>
        i === action.index ? { ...card, flipped: true, complete: true } : card
      );
    case ACTIONS.reloadCards:
      return shufflingCards();
    default:
      throw new Error(
        `La accion ${action.type} no esta soportada por el reducer`
      );
  }
};

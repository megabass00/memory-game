import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useCards from "./useCards";
import { initialCards, ACTIONS } from "Store/cardStore";

const mockCards = (numberOfCards) => {
  let mock = [];
  for (let i = 0; i < numberOfCards; i++) {
    mock.push({
      index: i,
      image: "testImagePath",
      flipped: false,
      complete: false,
    });
  }
  return mock;
};

const setup = () => renderHook(() => useCards({ initialCards }));

describe('testing custom-hooks (useCards)', () => {
  test("should initialize store", () => {
    const { result } = renderHook(() => useCards({ initialCards: mockCards(5) }));
    expect(result.current.cards.length).toBe(5);
    expect(typeof result.current.dispatch).toBe("function");
    expect(result.current.currentCard).toMatchObject({});
    expect(typeof result.current.setCurrentCard).toBe("function");
  });
  
  test("should render 7 cards", () => {
    const { result } = renderHook(() => useCards({ initialCards: mockCards(7) }));
    expect(result.current.cards.length).toBe(7);
  });
  
  test("initial cards should be 18", () => {
    const { result } = setup();
    expect(result.current.cards.length).toBe(18);
  });
  
  test("initial cards should have 9 different images", () => {
    const { result } = setup();
    const filteredCards = result.current.cards.reduce((acc, current) => {
      const x = acc.find((image) => image.image === current.image);
      return x ? acc : acc.concat([current]);
    }, []);
    expect(filteredCards.length).toBe(9);
  });
  
  test("current card should be updated", () => {
    const { result } = setup();
    const testCard = mockCards(1)[0];
    act(() => result.current.setCurrentCard(testCard));
    expect(result.current.currentCard).toMatchObject(testCard);
  });
  
  test("card should set flipped", () => {
    const testIndex = 2;
    const { result } = setup();
    act(() =>
      result.current.dispatch({
        type: ACTIONS.flipCard,
        payload: { index: testIndex, flip: true },
      })
    );
    const testCard = result.current.cards[testIndex];
    expect(testCard.flipped).toBe(true);
  });
  
  test("card should set completed", () => {
    const testIndex = 8;
    const { result } = setup();
    act(() =>
      result.current.dispatch({
        type: ACTIONS.completeCard,
        index: testIndex,
      })
    );
    const testCard = result.current.cards[testIndex];
    expect(testCard.flipped).toBe(true);
    expect(testCard.complete).toBe(true);
  });
});


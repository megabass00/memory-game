import { render, within } from "@testing-library/react";
import Game from "./index";

describe("testing <Game />", () => {
  test("renders without problems", () => {
    const { getByText } = render(<Game />);
    expect(getByText("5")).toBeInTheDocument();
    expect(getByText("7")).toBeInTheDocument();
    expect(getByText("12")).toBeInTheDocument();
    expect(getByText("17")).toBeInTheDocument();
    expect(getByText("18")).toBeInTheDocument();
  });

  test("classes are applied correctly", () => {
    const { container } = render(<Game />);
    const gameContainer = container.firstChild.firstChild.firstChild;
    const cardsList = container.getElementsByTagName("li");
    expect(gameContainer.classList.contains("game")).toBe(true);
    for (let i = 0; i < cardsList.length; i++) {
      const { getByText } = within(cardsList[i]);
      expect(getByText(`${i + 1}`)).toBeInTheDocument();
    }
  });

  test("desk should have 18 cards", () => {
    const { container } = render(<Game />);
    const cardsList = container.getElementsByTagName("li");
    expect(cardsList.length).toBe(18);
  });
});

import { render, fireEvent } from "@testing-library/react";
import EndGame from "./index";

const defaultProps = { handleTryAgain: () => {}, playTime: 0 };

describe("testing <EndGame />", () => {
  test("renders without problems", () => {
    const { getByText } = render(<EndGame {...defaultProps} />);
    expect(getByText("¡Completado!")).toBeInTheDocument();
    expect(getByText("Jugar otra vez")).toBeInTheDocument();
  });

  test("classes are applied correctly", () => {
    const { container } = render(<EndGame {...defaultProps} />);
    const modal = container.firstChild.firstChild;
    expect(container.firstChild.classList.contains("overlay")).toBe(true);
    expect(modal.classList.contains("modal")).toBe(true);
    expect(modal.firstChild.classList.contains("wrapper")).toBe(true);
    expect(modal.firstChild.firstChild.classList.contains("row")).toBe(true);
  });

  test("try again button is working", async () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <EndGame {...defaultProps} handleTryAgain={mockFn} />
    );
    await fireEvent.click(getByText(/Jugar otra vez/));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("play time is calculated correctly", () => {
    const { getByText } = render(
      <EndGame {...defaultProps} playTime={new Date().getTime()} />
    );
    const timeRegex = /[0-9]+:[0-9]+/i;
    expect(getByText(timeRegex)).toBeInTheDocument();
  });
});

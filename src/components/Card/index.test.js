import { render, fireEvent, waitFor } from "@testing-library/react";
import Card from "./index";
import TestImage from "../../images/thumb-1.png";

const defaultProps = {
  index: 0,
  image: TestImage,
  flipped: false,
  complete: false,
  onClick: () => {},
};

describe("testing <Card />", () => {
  test("card renders whitout errors", () => {
    const { getByText } = render(<Card {...defaultProps} />);
    expect(getByText(/1/)).toBeInTheDocument();
  });

  test("onclick prop is working", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Card {...defaultProps} onClick={handleClick} />
    );
    fireEvent.click(getByText(/1/));
    fireEvent.click(getByText(/1/));
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  test("classes are applied correctly", () => {
    const { container } = render(<Card {...defaultProps} />);
    expect(container.firstChild.classList.contains("card")).toBe(true);
    const cardContent = container.firstChild.firstChild.firstChild.firstChild;
    expect(cardContent.classList.contains("front")).toBe(true);
  });

  test("flip card is working", async () => {
    const { getByTestId } = render(<Card {...defaultProps} flipped={true} />);
    await waitFor(() => expect(getByTestId("back")).toBeInTheDocument());
  });

  test("complete prop is working", async () => {
    const { getByTestId } = render(<Card {...defaultProps} complete={true} />);
    await waitFor(() => () => expect(getByTestId("back")).toBeInTheDocument());
  });

  test("image is loading successfully", () => {
    render(<Card {...defaultProps} flipped={true} />);
    const img = document.querySelector("img");
    expect(img.src).toContain("thumb-1");
  });
});

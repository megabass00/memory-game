import { render, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("testing <Button />", () => {
  test("button renders whitout errors", () => {
    const { getByText } = render(<Button value="Send" />);
    expect(getByText("Send")).toBeInTheDocument();
  });

  test("onclick prop is working", () => {
    let count = 0;
    const onClick = () => count++;
    const { getByText } = render(<Button value="Click" onClick={onClick} />);
    const button = getByText("Click");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(count).toBe(3);
  });
});

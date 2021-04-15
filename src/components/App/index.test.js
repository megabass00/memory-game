import { render, fireEvent } from "@testing-library/react";
import App from "./index";

describe("testing <App />", () => {
  test("renders without problems", () => {
    const { getByText } = render(<App />);
    expect(getByText("MeMemory")).toBeInTheDocument();
    expect(getByText("Comenzamos")).toBeInTheDocument();
  });

  test("init button is working", async () => {
    const { getByText, container } = render(<App />);
    const button = await getByText("Comenzamos");
    await fireEvent.click(button);
    const appContainer = container.firstChild.firstChild.firstChild;
    expect(appContainer.classList.contains("game")).toBe(true);
    expect(getByText("5")).toBeInTheDocument();
    expect(getByText("10")).toBeInTheDocument();
    expect(getByText("11")).toBeInTheDocument();
    expect(getByText("18")).toBeInTheDocument();
  });
});

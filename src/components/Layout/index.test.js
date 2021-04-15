import { render } from "@testing-library/react";
import Layout from "./index";

describe("testing <App />", () => {
  test("renders without problems", () => {
    const { container } = render(<Layout>Test</Layout>);
    expect(container.firstChild.classList.contains("container")).toBe(true);
    expect(container.firstChild.firstChild.classList.contains("wrapper")).toBe(
      true
    );
  });

  test("renders children successfully", () => {
    const { getByText } = render(
      <Layout>
        <div>Test</div>
      </Layout>
    );
    expect(getByText("Test")).toBeInTheDocument();
  });
});

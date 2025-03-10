import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

beforeAll(() => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
});

test("renders Portfolio header", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const portfolioHeader = screen.getByRole("heading", { name: /Portfolio/i });
  expect(portfolioHeader).toBeInTheDocument();
});
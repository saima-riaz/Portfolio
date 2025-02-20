import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

beforeAll(() => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
});

test("renders Portfolio header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Portfolio/i);
  expect(linkElement).toBeInTheDocument();
});

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

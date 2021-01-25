import { render, screen } from "@testing-library/react";
import Header from "containers/Header";

test("Main Logo", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Main Logo/i);
  expect(linkElement).toBeInTheDocument();
});

import ResCard from "../ResCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";

it("should restcard with props data", () => {
  render(<ResCard resData={MOCK_DATA} />);

  const name = screen.getByText(/4.1/);

  expect(name).toBeInTheDocument();
});

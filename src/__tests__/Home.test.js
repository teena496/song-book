import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Home from "../Home";

test("should render Home component", () => {
  render(<Home />);
  const columnSongName = screen.getByTestId("columnname-1");
  console.log(columnSongName);
  expect(columnSongName.textContent).toBe("Song Name");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

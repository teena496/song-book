import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import AddNewSong from "../AddNewSong";

test("should add new song page contain add button", () => {
  render(<AddNewSong />);
  const addButton = screen.getByTestId("add-button");
  expect(addButton.textContent).toBe("Add");

  const artistField = screen.getByTestId("song-artist");
  expect(artistField.lastElementChild.textContent).toBe("Artist");
  const songNameField = screen.getByTestId("song-name");
  expect(songNameField.lastElementChild.textContent).toBe("Song Name");
});

test("match snapshot", () => {
  const tree = renderer.create(<AddNewSong />);
  expect(tree).toMatchSnapshot();
});

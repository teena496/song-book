import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNewSong from "./AddNewSong";
import SongList from "./SongList";
import NavBar from "./NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "monospace",
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[900],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#be9ae2",
    },
  },
});

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar></NavBar>
          <div className="container">
            <Routes>
              <Route path="/" element={<SongList />} />
              <Route path="/newSong" element={<AddNewSong />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

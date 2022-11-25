import { Link } from "react-router-dom";
import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
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

export default function NavBar() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography
              variant="h5"
              color="primary"
              fontFamily="monospace"
              fontWeight="700"
              sx={{ flexGrow: 1 }}
            >
              MY SONG BOOK
            </Typography>
            <Link style={{ textDecoration: "none" }} to="/">
              <Typography paddingRight={"20px"}>HOME</Typography>
            </Link>
            <Link style={{ textDecoration: "none" }} to="newSong">
              <Typography paddingRight={"20px"}> ADD NEW SONG</Typography>
            </Link>
            <Link style={{ textDecoration: "none" }} to="about">
              <Typography paddingRight={"20px"}>ABOUT</Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
}

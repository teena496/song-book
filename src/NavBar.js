import { Link } from "react-router-dom";
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function NavBar() {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h5" fontWeight="bold" sx={{ flexGrow: 1 }}>
            MY SONG BOOK
          </Typography>
          <Link style={{ textDecoration: "none" }} to="/">
            <Typography variant="h6" paddingRight="70px">
              SONGS
            </Typography>
          </Link>
          <Link style={{ textDecoration: "none" }} to="newSong">
            <Typography variant="h6" paddingRight="20px">
              ADD NEW SONG
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

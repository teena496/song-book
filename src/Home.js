import {
  Container,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  Paper,
} from "@mui/material";
import React from "react";

const rows = [
  {
    name: "Thank You Lord",
    link: "https://www.youtube.com/watch?v=sax4aTgZ9dw",
    artist: "Don Moen",
    genre: "Gospel",
    released: "2004",
  },
  {
    name: "God Will Make A Way",
    link: "https://www.youtube.com/watch?v=_rSWXf2Y4z0",
    artist: "Don Moen",
    genre: "Gospel",
    released: "1992",
  },
  {
    name: "I Will Sing",
    link: "https://www.youtube.com/watch?v=lw9CcLGjouM",
    artist: "Don Moen",
    genre: "Gospel",
    released: "2000",
  },
];

export default function Home() {
  return (
    <div>
      {/* <Container sx={{ padding: "30px" }}> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Song Name</TableCell>
              <TableCell align="right">Artist</TableCell>
              <TableCell align="right">Genre</TableCell>
              <TableCell align="right">Released</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <a href={row.link} target="_blank">
                    {row.name}
                  </a>
                </TableCell>
                <TableCell align="right">{row.artist}</TableCell>
                <TableCell align="right">{row.genre}</TableCell>
                <TableCell align="right">{row.released}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* </Container> */}
    </div>
  );
}

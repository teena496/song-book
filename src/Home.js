import {
  Container,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  Paper,
  Button,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

export default function Home() {
  const [songs, setSongs] = useState([]);
  const columnNames = [
    { id: 1, name: "Song Name" },
    { id: 2, name: "Artist" },
    { id: 3, name: "Genre" },
    { id: 4, name: "Released" },
    { id: 5, name: "" },
    { id: 6, name: "" },
  ];
  const songsCollection = collection(db, "songs");

  useEffect(() => {
    const getSongs = async () => {
      const data = await getDocs(songsCollection);
      if (data) {
        setSongs(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      } else return;
    };
    getSongs();
  }, [songs, songsCollection]);

  const onDeleteSong = async (id) => {
    const songDoc = doc(db, "songs", id);
    deleteDoc(songDoc);
  };

  const onUpdateSong = async (id) => {
    // const songDoc = doc(db, "songs", id);
    // await updateDoc(songDoc, {
    //   name: "Test by Teena",
    // });
  };

  return (
    <div>
      <Container sx={{ padding: "30px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {columnNames.map((column) => (
                  <TableCell
                    key={`columnname-${column.id}`}
                    data-testid={`columnname-${column.id}`}
                    sx={{ fontSize: "1rem" }}
                  >
                    {column.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {songs.map((row) => (
                <TableRow>
                  <TableCell>
                    <a href={row.link}>{row.name}</a>
                  </TableCell>
                  <TableCell>{row.artist}</TableCell>
                  <TableCell>{row.genre}</TableCell>
                  <TableCell>{row.released}</TableCell>
                  <TableCell>
                    <Button onClick={() => onDeleteSong(row.id)}>Delete</Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => onUpdateSong(row.id)}>Update</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

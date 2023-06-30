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
  Dialog,
  Typography,
} from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import UpdateSong from "./UpdateSong";

export default function Home() {
  const [songs, setSongs] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(false);
  const columnNames = [
    { id: 1, name: "Song Name" },
    { id: 2, name: "Artist" },
    { id: 3, name: "Genre" },
    { id: 4, name: "Released" },
    { id: 5, name: "" },
    { id: 6, name: "" },
  ];
  const songsCollection = collection(db, "songs");

  const useSongCollection = () => {
    const getSongs = useCallback(async () => {
      const data = await getDocs(songsCollection);
      if (data) {
        setSongs(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            videoId: doc.data().link.split("v=")[1],
          }))
        );
      } else return;
    }, []);

    return { getSongs };
  };

  const { getSongs } = useSongCollection();

  useEffect(() => {
    getSongs();
  }, [getSongs]);

  const onDeleteSong = async (id) => {
    const songDoc = doc(db, "songs", id);
    deleteDoc(songDoc);
    getSongs();
  };

  const onUpdateSong = async (id) => {
    setOpen(true);
    setSelectedRowId(id);
  };

  const handleClose = () => {
    setOpen(false);
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
                <TableRow key={row.id}>
                  <TableCell
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>{row.name}</Typography>
                    <a href={row.link}>
                      <img
                        width="200rem"
                        src={`https://img.youtube.com/vi/${row.videoId}/0.jpg`}
                      ></img>
                    </a>
                  </TableCell>
                  <TableCell>{row.artist}</TableCell>
                  <TableCell>{row.genre}</TableCell>
                  <TableCell>{row.released}</TableCell>
                  <TableCell>
                    <Button onClick={() => onDeleteSong(row.id)}>Delete</Button>
                  </TableCell>
                  <TableCell>
                    <div>
                      <Button onClick={() => onUpdateSong(row.id)}>
                        Update
                      </Button>
                    </div>
                    {row.id === selectedRowId ? (
                      <Dialog open={open} onClose={handleClose}>
                        <UpdateSong
                          id={row.id}
                          selectedSong={row}
                          handleClose={handleClose}
                          getSongs={getSongs}
                        />
                      </Dialog>
                    ) : null}
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

import {
  Container,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  Button,
  Dialog,
  Typography,
} from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import UpdateSong from "./UpdateSong";

export default function SongList() {
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
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {columnNames.map((column) => (
                  <TableCell
                    key={`columnname-${column.id}`}
                    data-testid={`columnname-${column.id}`}
                  >
                    <Typography variant="h6">{column.name}</Typography>
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
                        alt={row.name}
                        width="200rem"
                        src={`https://img.youtube.com/vi/${row.videoId}/0.jpg`}
                      ></img>
                    </a>
                  </TableCell>
                  <TableCell>
                    <Typography>{row.artist}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{row.genre}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{row.released}</Typography>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => onDeleteSong(row.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => onUpdateSong(row.id)}
                    >
                      Update
                    </Button>
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

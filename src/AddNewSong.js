import { TextField, Container, Button } from "@mui/material";
import React, { useState } from "react";
import { db } from "./firebase-config";
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";

export default function AddNewSong() {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [released, setReleased] = useState("");

  const [songs, setSongs] = useState([]);

  const songsCollection = collection(db, "songs");

  const onAddClick = async () => {
    await addDoc(songsCollection, {
      name,
      link,
      artist,
      genre,
      released,
    });
  };

  return (
    <div>
      <Container
        sx={{
          padding: "30px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <TextField
          id="standard-basic"
          size="small"
          label="Song Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-size-small"
          size="small"
          label="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <TextField
          id="outlined-size-small"
          defaultValue=""
          size="small"
          label="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <TextField
          id="outlined-size-small"
          defaultValue=""
          size="small"
          label="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <TextField
          id="outlined-size-small"
          defaultValue=""
          size="small"
          label="Released"
          value={released}
          onChange={(e) => setReleased(e.target.value)}
        />
        <Button variant="contained" onClick={onAddClick}>
          Add{" "}
        </Button>
      </Container>
    </div>
  );
}

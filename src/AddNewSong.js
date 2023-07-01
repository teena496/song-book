import { Container, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";
import SongField from "./SongField";

export default function AddNewSong() {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [released, setReleased] = useState("");

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
        maxWidth="sm"
        sx={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography variant="h5" fontWeight="bold" alignSelf="center">
          ADD NEW SONG
        </Typography>
        <SongField fieldname="Song Name" fieldValue={name} setField={setName} />
        <SongField fieldname="Link" fieldValue={link} setField={setLink} />
        <SongField
          fieldname="Artist"
          fieldValue={artist}
          setField={setArtist}
        />
        <SongField fieldname="Genre" fieldValue={genre} setField={setGenre} />
        <SongField
          fieldname="Released"
          fieldValue={released}
          setField={setReleased}
        />
        <Button
          data-testid="add-button"
          variant="contained"
          onClick={onAddClick}
        >
          Add
        </Button>
      </Container>
    </div>
  );
}

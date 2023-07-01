import React, { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase-config";
import {
  Button,
  DialogTitle,
  DialogContent,
  Container,
  DialogActions,
} from "@mui/material";
import SongField from "./SongField";

export default function UpdateSong({
  id,
  selectedSong,
  handleClose,
  getSongs,
}) {
  const [name, setName] = useState(selectedSong.name);
  const [link, setLink] = useState(selectedSong.link);
  const [artist, setArtist] = useState(selectedSong.artist);
  const [genre, setGenre] = useState(selectedSong.genre);
  const [released, setReleased] = useState(selectedSong.released);

  const onUpdateClick = async () => {
    const songDoc = doc(db, "songs", id);

    await updateDoc(songDoc, {
      name,
      link,
      artist,
      genre,
      released,
    });
    handleClose();
    getSongs();
  };

  return (
    <>
      <DialogTitle fontWeight={"bold"}>UPDATE SONG</DialogTitle>
      <DialogContent>
        <Container
          sx={{
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "30rem",
          }}
        >
          <SongField
            fieldname="Song Name"
            fieldValue={name}
            setField={setName}
          />
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
        </Container>
        <DialogActions>
          <Button
            data-testid="cancel-button"
            variant="contained"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            data-testid="add-button"
            variant="contained"
            onClick={onUpdateClick}
          >
            Update
          </Button>
        </DialogActions>
      </DialogContent>
    </>
  );
}

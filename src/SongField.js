import React from "react";
import { Typography, TextField } from "@mui/material";

export default function SongField({ fieldname, fieldValue, setField }) {
  return (
    <>
      <Typography variant="h7" fontWeight="bold">
        {fieldname}
      </Typography>
      <TextField
        autoFocus
        id="outlined-size-small"
        data-testid="song-name"
        size="small"
        value={fieldValue}
        onChange={(e) => setField(e.target.value)}
      />
    </>
  );
}

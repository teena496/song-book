import React from "react";
import { Typography, TextField } from "@mui/material";

export default function SongField({ fieldname, fieldValue, setField }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Typography
        sx={{
          padding: "5px 30px 30px 10px",
        }}
      >
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
    </div>
  );
}

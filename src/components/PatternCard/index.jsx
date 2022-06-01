import React from "react";
import { Grid } from "@mui/material";

export default function PatternCard(props) {
  return (
    <Grid container>
      <Grid item>
        <h1>Title</h1>
        <img
          src="https://i.pinimg.com/originals/3a/38/a7/3a38a7f50ae8fc3ed77ef2a52aaae902.jpg"
          alt="whale"
          width="500"
        />
      </Grid>
      <Grid item>
        <h2>Materials</h2>
        <p>Some text here</p>
        <h2>Pattern</h2>
        <p>Some more text here</p>
      </Grid>
    </Grid>
  );
}

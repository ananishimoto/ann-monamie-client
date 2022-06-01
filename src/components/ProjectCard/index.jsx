import React from "react";
import { Grid } from "@mui/material";

export default function ProjectCard(props) {
  return (
    <Grid>
      <Grid>
        <h1>Wishlist</h1>
      </Grid>
      <Grid>
        <p>{props.name}</p>
      </Grid>
    </Grid>
  );
}

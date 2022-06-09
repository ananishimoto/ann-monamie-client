import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function PatternCard(props) {
  const materials = props.materials;
  const tools = props.tools;

  return (
    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item>
        <Typography variant="h3" sx={{ color: "#ae7d73" }}>
          {props.name}
        </Typography>
        <br />
        <img src={props.image} alt={props.name} width="500" />
      </Grid>
      <Box
        item
        sx={{
          padding: 10,
          width: 200,
          backgroundColor: "#ae7d73",
        }}
      >
        <Grid color="white" item>
          <h2>Materials</h2>
          <ul>
            {materials.map((material) => (
              <div key={material.id}>
                <li>
                  <strong>{material.name}</strong>
                </li>
              </div>
            ))}
          </ul>
        </Grid>
        <br />
        <Grid color="white" item>
          <h2>Tools</h2>
          <ul>
            {tools.map((tool) => (
              <div key={tool.id}>
                <li>
                  <strong>{tool.name}</strong>
                </li>
              </div>
            ))}
          </ul>
        </Grid>
        <br />
        <Grid color="white">
          <h2>Pattern</h2>
          <p>{props.pattern}</p>
        </Grid>
      </Box>
    </Grid>
  );
}

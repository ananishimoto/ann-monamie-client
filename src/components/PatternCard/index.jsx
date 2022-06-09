import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function PatternCard(props) {
  const materials = props.materials;
  const tools = props.tools;

  const imageStyle = {
    borderRadius: 35,
  };

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item>
        <Typography variant="h3" sx={{ color: "#ae7d73", padding: 2 }}>
          {props.name}
        </Typography>
        <br />
        <img
          src={props.image}
          alt={props.name}
          width="500"
          style={imageStyle}
        />
      </Grid>
      <Box
        sx={{
          padding: 7,
          margin: 10,
          width: 400,
          borderRadius: 10,
          border: 2,
          borderColor: "#a35140",
        }}
      >
        <Grid color="#a35140" item>
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
        <Grid color="#a35140" item>
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
        <Grid color="#a35140">
          <h2>Pattern</h2>
          <p>{props.pattern}</p>
        </Grid>
      </Box>
    </Grid>
  );
}

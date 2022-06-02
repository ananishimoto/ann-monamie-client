import React from "react";
import { Box, Grid } from "@mui/material";

export default function PatternCard(props) {
  // console.log("This is the card", props.tools);
  const materials = props.materials;
  const tools = props.tools;

  return (
    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item>
        <h1>{props.name}</h1>
        <img src={props.image} alt={props.name} width="500" />
      </Grid>
      <Box
        item
        sx={{
          borderSpacing: 10,
          padding: 10,
          width: 200,
          height: 300,
          backgroundColor: "purple",
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
                <li>Color: {material.color}</li>
                <li>Amount: {material.projectMaterial.materialAmount}</li>
              </div>
            ))}
          </ul>
        </Grid>
        <Grid color="white" item>
          <h2>Tools</h2>
          <ul>
            {tools.map((tool) => (
              <div key={tool.id}>
                <li>
                  <strong>{tool.name}</strong>
                </li>
                <li>Amount: {tool.projectTool.toolAmount}</li>
              </div>
            ))}
          </ul>
        </Grid>
        <Grid color="white">
          <h2>Pattern</h2>
          <p>{props.pattern}</p>
        </Grid>
      </Box>
    </Grid>
  );
}

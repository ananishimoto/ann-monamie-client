import React from "react";
import NavBar from "../../components/NavBar";
import { Grid, Paper, Avatar, Typography } from "@mui/material";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function CreateProject() {
  const newProjectBackgroundStyle = {
    padding: 20,
    height: "70vh",
    width: 700,
    margin: "20px auto",
  };

  return (
    <Grid>
      <NavBar />
      <NavLink to="/projects">
        <Button color="secondary" variant="contained">
          Back to your projects
        </Button>
      </NavLink>
      <Paper elevation={5} style={newProjectBackgroundStyle}>
        <Grid align="center">
          <Avatar>
            <TipsAndUpdatesOutlinedIcon />
          </Avatar>
          <h1>Create a new project</h1>
        </Grid>
        <Typography>Project Name</Typography>
        <TextField id="nameInput" variant="outlined" fullWidth required />
        <Typography>Materials</Typography>
        <TextField id="materialsInput" variant="outlined" fullWidth required />
        <Typography>Pattern</Typography>
        <TextField id="patternInput" variant="outlined" fullWidth required />
        <Typography>Image</Typography>
        <TextField
          id="imageInput"
          placeholder="Upload your pictures here"
          variant="outlined"
          fullWidth
        />
        <Button type="submit" color="secondary" variant="contained" fullWidth>
          Create!
        </Button>
      </Paper>
    </Grid>
  );
}

import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { Grid, Paper, Avatar, Typography } from "@mui/material";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function CreateProject() {
  const [getName, setName] = useState("");
  const [getMaterials, setMaterials] = useState("");
  const [getTools, setTools] = useState("");
  const [getPattern, setPattern] = useState("");
  const [getImage, setImage] = useState("");

  function submitNewProjectForm(event) {
    event.preventDefault();

    // dispatch(signUp(getName, getEmail, getPassword));

    setName("");
    setTools("");
    setMaterials("");
    setPattern("");
    setImage("");
  }

  const newProjectBackgroundStyle = {
    padding: 20,
    height: "70vh",
    width: 700,
    margin: "20px auto",
  };

  console.log(
    "working?",
    getName,
    getMaterials,
    getTools,
    getPattern,
    getImage
  );

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
        <form onSubmit={submitNewProjectForm}>
          <Typography>Project Name</Typography>
          <TextField
            id="nameInput"
            variant="outlined"
            fullWidth
            required
            value={getName}
            onChange={(event) => setName(event.target.value)}
          />
          <Typography>Tools</Typography>
          <TextField
            id="nameInput"
            variant="outlined"
            fullWidth
            required
            value={getTools}
            onChange={(event) => setTools(event.target.value)}
          />
          <Typography>Materials</Typography>
          <TextField
            id="materialsInput"
            variant="outlined"
            fullWidth
            required
            value={getMaterials}
            onChange={(event) => setMaterials(event.target.value)}
          />
          <Typography>Pattern</Typography>
          <TextField
            id="patternInput"
            variant="outlined"
            fullWidth
            required
            value={getPattern}
            onChange={(event) => setPattern(event.target.value)}
          />
          <Typography>Image</Typography>
          <TextField
            id="imageInput"
            placeholder="Upload your pictures here"
            variant="outlined"
            fullWidth
            value={getImage}
            onChange={(event) => setImage(event.target.value)}
          />
          <Button type="submit" color="secondary" variant="contained" fullWidth>
            Create!
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

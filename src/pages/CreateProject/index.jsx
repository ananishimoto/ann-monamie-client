import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Image from "../../images/watercolorBG.jpg";

export default function CreateProject() {
  const backgroundStyle = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
    },
  };

  const newProjectBackgroundStyle = {
    padding: 20,
    height: "70vh",
    width: 700,
    margin: "20px auto",
  };

  const dispatch = useDispatch();

  const [getName, setName] = useState("");
  const [getMaterials, setMaterials] = useState("");
  const [getTools, setTools] = useState("");
  const [getPattern, setPattern] = useState("");
  const [getImage, setImage] = useState("");

  useEffect(() => {
    async function fetchMaterialsAndTools() {
      const response = await axios.get(`${apiUrl}/materials`);
      setMaterials(response.data.materials);
      setTools(response.data.tools);
      // console.log("response", getMaterials, getTools);
      // console.log({ getTools });
    }
    fetchMaterialsAndTools();
  }, [dispatch]);

  function submitNewProjectForm(event) {
    event.preventDefault();

    setName("");
    setPattern("");
    setImage("");
  }

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
      <Paper style={backgroundStyle.paperContainer}>
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
            <FormGroup>
              <Grid>
                {getTools &&
                  getTools.map((tool) => (
                    <FormControlLabel
                      key={tool.id}
                      control={<Checkbox value={tool.id} />}
                      label={tool.name}
                    />
                  ))}
              </Grid>
            </FormGroup>
            <Typography>Materials</Typography>
            <FormGroup>
              <Grid>
                {getMaterials &&
                  getMaterials.map((material) => (
                    <FormControlLabel
                      key={material.id}
                      control={<Checkbox value={material.id} />}
                      label={material.name}
                    />
                  ))}
              </Grid>
            </FormGroup>
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
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              fullWidth
            >
              Create!
            </Button>
          </form>
        </Paper>
      </Paper>
    </Grid>
  );
}

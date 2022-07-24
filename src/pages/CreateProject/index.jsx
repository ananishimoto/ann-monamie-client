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
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import { TextField } from "@mui/material";
import { Button, Box } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import BGImage from "../../images/watercolorBG.jpg";
import { createNewProject } from "../../store/project/actions";
import TextEditor from "../../components/TextEditor";
import { useRadioGroup } from "@mui/material/RadioGroup";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { addUserProject } from "../../store/user/slice";
import { getUserWithStoredToken } from "../../store/user/actions";

export default function CreateProject() {
  const backgroundStyle = {
    paperContainer: {
      backgroundImage: `url(${BGImage})`,
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

  const largeIcon = {
    width: 75,
    height: 75,
    color: "#8a564c",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [getName, setName] = useState("");
  const [getTools, setTools] = useState("");
  const [getMaterials, setMaterials] = useState("");
  const [getNeededTools, setNeededTools] = useState([]);
  const [getNeededMaterials, setNeededMaterials] = useState([]);
  const [getPattern, setPattern] = useState("");
  const [getImage, setImage] = useState("");
  const [getStatus, setStatus] = useState("Wishlist");

  useEffect(() => {
    async function fetchMaterialsAndTools() {
      const response = await axios.get(`${apiUrl}/materials`);
      setMaterials(response.data.materials);
      setTools(response.data.tools);
    }
    fetchMaterialsAndTools();
  }, [dispatch]);

  const checkedToolBox = (event) => {
    const id = parseInt(event.target.value);
    if (event.target.checked) {
      setNeededTools([...getNeededTools, id]);
    } else {
      const UpdatedTools = getNeededTools.filter((toolId) => toolId !== id);
      setNeededTools(UpdatedTools);
    }
  };

  const checkedMaterialBox = (event) => {
    const id = parseInt(event.target.value);
    if (event.target.checked) {
      setNeededMaterials([...getNeededMaterials, id]);
    } else {
      const UpdatedMaterials = getNeededMaterials.filter(
        (toolId) => toolId !== id
      );
      setNeededMaterials(UpdatedMaterials);
    }
  };

  async function uploadImage(files) {
    const formData = new FormData();
    formData.append("file", getImage);
    formData.append("upload_preset", "default_preset");

    return axios.post(
      "https://api.cloudinary.com/v1_1/nishimoto/image/upload",
      formData
    );
  }

  async function submitNewProjectForm(event) {
    event.preventDefault();
    const image = await uploadImage(getImage);
    dispatch(
      createNewProject(
        getName,
        getNeededTools,
        getNeededMaterials,
        getPattern,
        getStatus,
        image.data.url
      )
    );
    navigate("/projects");
  }

  return (
    <Grid>
      <Grid container alignItems="center">
        <Paper style={backgroundStyle.paperContainer}>
          <Grid item>
            <NavLink to="/projects">
              <ArrowBackIosNewOutlinedIcon style={largeIcon} />
            </NavLink>
          </Grid>
          <Paper elevation={5} style={newProjectBackgroundStyle}>
            <Grid>
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
                          control={
                            <Checkbox
                              value={tool.id}
                              onChange={checkedToolBox}
                            />
                          }
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
                          control={
                            <Checkbox
                              value={material.id}
                              onChange={checkedMaterialBox}
                            />
                          }
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
                {/* <TextEditor /> */}
                <Grid>
                  <FormControl>
                    <FormLabel id="project-status-group-label">
                      Project Status
                    </FormLabel>
                    <RadioGroup
                      row
                      value={getStatus}
                      onChange={(event) => setStatus(event.target.value)}
                      aria-labelledby="projectStatus"
                      defaultValue="allStatus"
                      name="projectStatusButtons"
                    >
                      <FormControlLabel
                        value="Wishlist"
                        control={<Radio />}
                        label="Wishlist"
                      />
                      <FormControlLabel
                        value="WIP"
                        control={<Radio />}
                        label="Work in Progress"
                      />
                      <FormControlLabel
                        value="Finished"
                        control={<Radio />}
                        label="Finished"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Typography>Image</Typography>
                <input
                  type="file"
                  onChange={(event) => setImage(event.target.files[0])}
                />
                <Button
                  sx={{
                    backgroundColor: "#ae7d73",
                    "&:hover": {
                      backgroundColor: "#8a564c",
                    },
                  }}
                  type="submit"
                  color="secondary"
                  variant="contained"
                  fullWidth
                >
                  Create!
                </Button>
              </form>
            </Grid>
          </Paper>
        </Paper>
      </Grid>
    </Grid>
  );
}

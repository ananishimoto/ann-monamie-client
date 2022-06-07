import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import PatternCard from "../../components/PatternCard";
import { useDispatch, useSelector } from "react-redux";
import { selectDetails } from "../../store/project/selectors";
import { fetchProjectDetails } from "../../store/project/actions";
import Image from "../../images/watercolorBG.jpg";
import { deleteProjectById } from "../../store/project/actions";
import { useNavigate } from "react-router-dom";

export default function DetailsPage() {
  const details = useSelector(selectDetails);
  // console.log("this is the details page", details);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  useEffect(() => {
    dispatch(fetchProjectDetails(id));
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(deleteProjectById(id));
    navigate("/projects");
  };

  if (details === null) {
    return <p>loading..</p>;
  }
  return (
    <Grid>
      <Paper style={backgroundStyle.paperContainer}>
        <NavLink to="/projects">
          <Button
            sx={{
              backgroundColor: "#ae7d73",
              "&:hover": {
                backgroundColor: "#8a564c",
              },
            }}
            variant="contained"
          >
            Back to your projects
          </Button>
        </NavLink>
        <Grid>
          {details.map((project) => (
            <PatternCard
              key={project.id}
              id={project.id}
              name={project.name}
              pattern={project.pattern}
              image={project.image}
              materials={project.materials}
              tools={project.tools}
            />
          ))}
        </Grid>
        <Button
          onClick={() => handleDelete()}
          sx={{
            backgroundColor: "#ae7d73",
            "&:hover": {
              backgroundColor: "#8a564c",
            },
          }}
          variant="contained"
        >
          Delete this project 😞
        </Button>
        <Button
          sx={{
            backgroundColor: "#ae7d73",
            "&:hover": {
              backgroundColor: "#8a564c",
            },
          }}
          variant="contained"
        >
          Change the information
        </Button>
        <Button
          sx={{
            backgroundColor: "#ae7d73",
            "&:hover": {
              backgroundColor: "#8a564c",
            },
          }}
          variant="contained"
        >
          Work in this project 🧵
        </Button>
      </Paper>
    </Grid>
  );
}

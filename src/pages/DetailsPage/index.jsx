import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import PatternCard from "../../components/PatternCard";
import { useDispatch, useSelector } from "react-redux";
import { selectDetails } from "../../store/project/selectors";
import { fetchProjectDetails } from "../../store/project/actions";
import Image from "../../images/watercolorBG.jpg";

export default function DetailsPage() {
  const details = useSelector(selectDetails);
  // console.log("this is the details page", details);
  const { id } = useParams();
  const dispatch = useDispatch();

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

  if (details === null) {
    return <h2>Loading</h2>;
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
      </Paper>
    </Grid>
  );
}

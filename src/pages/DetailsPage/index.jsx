import React, { useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import PatternCard from "../../components/PatternCard";
import { useDispatch, useSelector } from "react-redux";
import { selectDetails } from "../../store/project/selectors";
import Image from "../../images/watercolorBG.jpg";
import { deleteProjectById } from "../../store/project/actions";
import { useNavigate } from "react-router-dom";
import Timer from "../../components/Timer";
import { getProjectDetails } from "../../store/project/actions";
import { selectToken, selectUser } from "../../store/user/selectors";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

export default function DetailsPage(props) {
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

  const largeIcon = {
    width: 75,
    height: 75,
    color: "#8a564c",
  };

  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const details = useSelector(selectDetails);
  console.log(details);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProjectDetails(id));
  }, [dispatch, token, id, navigate]);

  const handleDelete = () => {
    dispatch(deleteProjectById(id));
    navigate("/projects");
  };

  // const updateForm = () => {
  //   console.log("This is the update form");
  //   window.open("http://localhost:3000/");
  // };

  if (details === null) {
    return <p>loading..</p>;
  }

  const ownProject = user?.projects?.includes(parseInt(id));
  return (
    <Grid>
      <Box container alignItems="center">
        <Paper style={backgroundStyle.paperContainer}>
          <Grid container alignItems="center">
            {token && (
              <Grid item>
                <NavLink to="/projects">
                  <ArrowBackIosNewOutlinedIcon style={largeIcon} />
                </NavLink>
              </Grid>
            )}
            {token === null && (
              <Grid item>
                <NavLink to="/inspiration">
                  <ArrowBackIosNewOutlinedIcon style={largeIcon} />
                </NavLink>
              </Grid>
            )}
            <Grid item>
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

            {ownProject && (
              <Grid>
                <Box>
                  <Timer />
                </Box>
                {/* <Box>
                  <Button
                    onClick={updateForm}
                    sx={{
                      backgroundColor: "#ae7d73",
                      "&:hover": {
                        backgroundColor: "#8a564c",
                      },
                      margin: 1,
                    }}
                    variant="contained"
                  >
                    Update information ✍️
                  </Button>
                </Box> */}
                <Box>
                  <Typography variant="h6" sx={{ margin: 1 }}>
                    ⚠️ Carefully ⚠️
                  </Typography>
                  <Button
                    onClick={() => handleDelete()}
                    sx={{
                      backgroundColor: "#ae7d73",
                      "&:hover": {
                        backgroundColor: "#8a564c",
                      },
                      margin: 1,
                    }}
                    variant="contained"
                  >
                    Delete this project 😞
                  </Button>
                </Box>
              </Grid>
            )}
          </Grid>
        </Paper>
      </Box>
    </Grid>
  );
}

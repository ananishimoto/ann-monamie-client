import { Grid, Paper, Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import Image from "../../images/watercolorBG.jpg";
import { getUserWithStoredToken } from "../../store/user/actions";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  if (user === null) {
    return <h3>Just a moment...</h3>;
  }

  return (
    <Box>
      <Paper style={backgroundStyle.paperContainer}>
        <Grid
          sx={
            {
              // display: "flex-flow",
              // flexDirection: "row",
              // justifyContent: "center",
              // alignItems: "center",
            }
          }
        >
          <Grid
          // sx={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          // }}
          >
            <Typography variant="h4" sx={{ color: "#ae7d73" }}>
              Your profile
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h6" sx={{ color: "#ae7d73" }}>
              Name
            </Typography>
            <Typography variant="p">{user.name}</Typography>
            <Typography variant="h6" sx={{ color: "#ae7d73" }}>
              E-mail
            </Typography>
            <Typography variant="p">{user.email}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

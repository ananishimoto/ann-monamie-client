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
        <Box display="flex" flexDirection="row">
          {/* <Grid
          container
          alignItems="center"
          xs={12}
          sm={6}
          direction="row"
          // spacing={15}
          sx={{ flexWrap: "wrap" }}
        > */}
          {/* <Grid
            item
            xs={3} */}
          {/* // item
            // sx={{ */}
          {/* //   display: "flex",
            //   justifyContent: "center",
            // }}
          // > */}
          <Box flexDirection="row">
            <Typography variant="h4" sx={{ color: "#ae7d73" }}>
              Your profile
            </Typography>
            {/* // </Grid> */}
          </Box>
          <Box flexDirection="row">
            {/* <Grid
            item
            xs={3} */}
            {/* // sx={{
            //   flexDirection: "row",
            //   justifyContent: "center",
            // }}
          // > */}
            <Typography variant="h6" sx={{ color: "#ae7d73" }}>
              Name
            </Typography>
            <Typography variant="p">{user.name}</Typography>
            <Typography variant="h6" sx={{ color: "#ae7d73" }}>
              E-mail
            </Typography>
            <Typography variant="p">{user.email}</Typography>
          </Box>
          {/* </Grid> */}
        </Box>
        {/* </Grid> */}
      </Paper>
    </Box>
  );
}

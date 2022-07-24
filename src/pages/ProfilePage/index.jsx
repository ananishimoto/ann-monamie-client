import { Paper, Typography, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import Image from "../../images/watercolorBG.jpg";
import { getUserWithStoredToken } from "../../store/user/actions";
import FaceIcon from "@mui/icons-material/Face";

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

  const largeIcon = {
    width: 50,
    height: 50,
    color: "#8a564c",
  };

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  if (user === null) {
    return <h3>Just a moment...</h3>;
  }

  return (
    <Paper style={backgroundStyle.paperContainer}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="50vh"
      >
        <Box container display="flex" alignItems="flex-start">
          <Box item xs={4} sx={{ marginRight: 10 }}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: "#ae7d73" }}
            >
              Your profile
            </Typography>
            {/* <Button
              sx={{
                backgroundColor: "#ac837c",
                "&:hover": {
                  backgroundColor: "#8a564c",
                },
                marginTop: 3,
              }}
              variant="contained"
            >
              Update information ✍️
            </Button> */}
            <Typography
              variant="h6"
              fontWeight="normal"
              sx={{ color: "#ae7d73" }}
            >
              Check all your personal info
            </Typography>
          </Box>
          <Box item xs={4}>
            <FaceIcon style={largeIcon} />
            <Typography variant="h6" sx={{ color: "#ae7d73" }}>
              Name
            </Typography>
            <Typography variant="p">{user.name}</Typography>
            <Typography variant="h6" sx={{ color: "#ae7d73" }}>
              E-mail
            </Typography>
            <Typography variant="p">{user.email}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

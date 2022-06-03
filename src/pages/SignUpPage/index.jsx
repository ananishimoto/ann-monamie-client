import React, { useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { signUp } from "../../store/user/actions";
import Image from "../../images/watercolorBG.jpg";

export default function SignUp() {
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

  const signUpBackgroundStyle = {
    padding: 20,
    // height: "70vh",
    width: 400,
    margin: "0px auto",
  };

  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/projects");
    }
  }, [token, navigate]);

  function submitSignUpForm(event) {
    event.preventDefault();

    dispatch(signUp(getName, getEmail, getPassword));
    console.log("working?");

    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <Grid>
      <Paper style={backgroundStyle.paperContainer}>
        <Paper elevation={5} style={signUpBackgroundStyle}>
          <Grid align="center">
            <Avatar>
              <AddCircleOutlineSharpIcon />
            </Avatar>
            <h1>Create new account</h1>
            <Typography>Already registered?</Typography>
            <NavLink to="/auth/login">Login</NavLink>
          </Grid>
          <form onSubmit={submitSignUpForm}>
            <TextField
              id="nameInput"
              label="Name"
              variant="standard"
              fullWidth
              required
              value={getName}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              id="emailInput"
              label="E-mail"
              variant="standard"
              fullWidth
              required
              value={getEmail}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              id="passwordInput"
              label="Password"
              variant="standard"
              type="password"
              fullWidth
              required
              value={getPassword}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              sx={{
                backgroundColor: "#ae7d73",
                "&:hover": {
                  backgroundColor: "#8a564c",
                },
              }}
              type="submit"
              variant="contained"
              fullWidth
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </Paper>
    </Grid>
  );
}

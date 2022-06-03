import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { login } from "../../store/user/actions";
import Image from "../../images/watercolorBG.jpg";

export default function LoginPage() {
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

  const loginBackgroundStyle = {
    padding: 20,
    // height: "70vh",
    width: 400,
    margin: "0 auto",
  };

  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      navigate("/projects");
    }
  }, [token, navigate]);

  function submitLoginForm(event) {
    event.preventDefault();

    dispatch(login(getEmail, getPassword));

    // console.log("clean form:");

    setEmail("");
    setPassword("");
  }

  return (
    <Grid>
      <Paper style={backgroundStyle.paperContainer}>
        <Paper elevation={5} style={loginBackgroundStyle}>
          <Grid align="center">
            <Avatar>
              <LoginSharpIcon
              // style={{ color: "8a564c" }}
              />
            </Avatar>
            <h1>Login</h1>
            <Typography>Don't have an account?</Typography>
            <NavLink to="/auth/signup">Sign up</NavLink>
          </Grid>
          <form onSubmit={submitLoginForm}>
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
              Log In
            </Button>
          </form>
        </Paper>
      </Paper>
    </Grid>
  );
}

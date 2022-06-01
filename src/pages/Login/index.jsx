import React from "react";
import NavBar from "../../components/NavBar";
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

export default function LoginPage() {
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

    console.log("clean form:");

    setEmail("");
    setPassword("");
  }

  const loginBackgroundStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };

  return (
    <Grid>
      <NavBar />
      <Paper elevation={5} style={loginBackgroundStyle}>
        <Grid align="center">
          <Avatar>
            <LoginSharpIcon />
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
          <Button type="submit" color="secondary" variant="contained" fullWidth>
            Log In
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

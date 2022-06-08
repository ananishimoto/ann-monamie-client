import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import DetailsPage from "./pages/DetailsPage";
import CreateProject from "./pages/CreateProject";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import MessageBox from "./components/MessageBox";
import NavBar from "../src/components/NavBar";
import Loading from "./components/Loading";
import ProfilePage from "./pages/ProfilePage";
import InspirationPage from "./pages/InspirationPage";
import { BottomNavigation, Typography, Box } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<DetailsPage />} />
        <Route path="/projects/new" element={<CreateProject />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="/auth/profile/:id" element={<ProfilePage />} />
        <Route path="/inspiration" element={<InspirationPage />} />
        <Route path="/inspiration/:id" element={<DetailsPage />} />
      </Routes>
      <BottomNavigation>
        <Typography
          variant="caption"
          color="#ae7d73"
          sx={{
            margin: 2,
          }}
        >
          ⭐ Ann Monamie - 2022 ⭐
        </Typography>
      </BottomNavigation>
    </div>
  );
}

export default App;

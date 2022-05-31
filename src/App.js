import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import DetailsPage from "./pages/DetailsPage";
import CreateProject from "./pages/CreateProject";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<DetailsPage />} />
        <Route path="/project/new" element={<CreateProject />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user/new" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;

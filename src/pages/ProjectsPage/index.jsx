import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import NavBar from "../../components/NavBar";
import ProjectCard from "../../components/ProjectCard";
import { fetchProjects } from "../../store/project/actions";
import { selectProjects } from "../../store/project/selectors";

export default function ProjectsPage() {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  // console.log("do I have projects?", projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (projects === null) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      <NavBar />
      <ProjectCard projects={projects} />
    </div>
  );
}

// {
//   "WIP": [],
//   "Finished": [],
//   "wishlist": []
// }

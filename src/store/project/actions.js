import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { fetchAllProjects, fetchDetails } from "./slice";
import { selectToken } from "../user/selectors";
import { deleteProject } from "./slice";

// Action to fetch all the projects from the logged user

export const fetchProjects = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    dispatch(appLoading());
    try {
      const fetchedProjects = await axios.get(`${apiUrl}/projects`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const projects = fetchedProjects.data.projects;

      dispatch(fetchAllProjects(projects));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

// Action to fetch the specific project for the details page

export const fetchProjectDetails = (id) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    dispatch(appLoading());
    try {
      const fetchedDetails = await axios.get(`${apiUrl}/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const details = fetchedDetails.data.details;
      // console.log(details);

      dispatch(fetchDetails(details));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

// Action to fetch all the projects from the logged user

export const createNewProject = (
  name,
  tools,
  materials,
  pattern,
  status,
  imgUrl
) => {
  return async (dispatch, getState) => {
    // const token = selectToken(getState());
    // console.log("Hello", name, tools, materials, pattern, status, imgUrl);
    dispatch(appLoading());
    try {
      // console.log("Thunk", name, tools, materials, pattern, imgUrl);
      const createProject = await axios.post(
        `${apiUrl}/projects/new`,
        {
          name,
          tools,
          materials,
          pattern,
          status,
          image: imgUrl,
        }
        // headers: { Authorization: `Bearer ${token}` },
      );

      console.log("What is that", createProject);
      // const projects = fetchedProjects.data.projects;
      // dispatch(fetchAllProjects(projects));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("Error");
      // if (error.response) {
      //   console.log(error.response.data.message);
      //   dispatch(
      //     setMessage({
      //       variant: "danger",
      //       dismissable: true,
      //       text: error.response.data.message,
      //     })
      //   );
      // } else {
      //   console.log(error.message);
      //   dispatch(
      //     setMessage({
      //       variant: "danger",
      //       dismissable: true,
      //       text: error.message,
      //     })
      //   );
      // }
      dispatch(appDoneLoading());
    }
  };
};

// Action to delete a specific project

export const deleteProjectById = (id) => {
  return async (dispatch, getState) => {
    // const token = selectToken(getState());
    dispatch(appLoading());
    try {
      const deleteSpecificProject = await axios.delete(
        `${apiUrl}/projects/${id}`,
        {
          // headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(deleteProject());
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

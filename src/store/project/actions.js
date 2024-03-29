import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { fetchAllProjects, fetchDetails } from "./slice";
import { selectToken } from "../user/selectors";
import { deleteProject } from "./slice";
import { getInspirationProjects } from "./slice";
import { addUserProject, tokenStillValid } from "../user/slice";

// Action to fetch all the available projects

export const fetchInspirationProjects = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const getAllProjects = await axios.get(`${apiUrl}/inspiration`);
      const inspirationProjects = getAllProjects.data;

      dispatch(getInspirationProjects(inspirationProjects));
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

// Action to fetch the specific project for the details page - User not logged in

export const getProjectDetails = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const projectDetailsInfo = await axios.get(`${apiUrl}/inspiration/${id}`);

      const details = projectDetailsInfo.data;
      console.log("thunk", details);

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
      console.log("actions", details);

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

// Action to create a new project

export const createNewProject = (
  name,
  tools,
  materials,
  pattern,
  status,
  imgUrl
) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    dispatch(appLoading());
    try {
      const createProject = await axios.post(
        `${apiUrl}/projects/new`,
        {
          name,
          tools,
          materials,
          pattern,
          status,
          image: imgUrl,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const projectId = createProject.data.projectId;
      console.log("What to I have new project", projectId);
      dispatch(addUserProject(projectId));
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

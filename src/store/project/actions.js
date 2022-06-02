import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { fetchAllProjects, fetchDetails } from "./slice";
import { selectToken } from "../user/selectors";

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

export const createNewProject = ({
  name,
  tools,
  materials,
  pattern,
  image,
}) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    dispatch(appLoading());
    try {
      const createProject = await axios.post(`${apiUrl}/projects/new`, {
        headers: { Authorization: `Bearer ${token}` },
        body: { name, tools, materials, pattern, image },
      });

      // const projects = fetchedProjects.data.projects;

      // dispatch(fetchAllProjects(projects));
      // dispatch(appDoneLoading());
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

// Fetch all the tools and materials to show in the create a new project form

// export const fetchMaterialsAndTools2 = () => {
//   return async (dispatch, getState) => {
//     // const token = selectToken(getState());
//     dispatch(appLoading());
//     try {
//       const fetchedMaterialsAndTools = await axios.get(
//         `${apiUrl}/materials`
//         // {
//         //   headers: { Authorization: `Bearer ${token}` },
//         // }
//       );

//       const materialsAndTools = fetchedMaterialsAndTools;
//       console.log(materialsAndTools.data);

//       // dispatch(fetchDetails(details));
//       dispatch(appDoneLoading());
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response.data.message);
//         dispatch(
//           setMessage({
//             variant: "danger",
//             dismissable: true,
//             text: error.response.data.message,
//           })
//         );
//       } else {
//         console.log(error.message);
//         dispatch(
//           setMessage({
//             variant: "danger",
//             dismissable: true,
//             text: error.message,
//           })
//         );
//       }
//       dispatch(appDoneLoading());
//     }
//   };
// };

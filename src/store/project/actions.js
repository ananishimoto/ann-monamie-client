import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { fetchAllProjects } from "./slice";
import { selectToken } from "../user/selectors";

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

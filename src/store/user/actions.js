import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/actions";
import { loginSuccess, logOut, tokenStillValid } from "./slice";

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const { data } = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
      });

      const { token, user } = data;

      dispatch(
        loginSuccess({
          token,
          user,
        })
      );
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("This is the error", { error });
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

// export const login = (email, password) => {
//   return async (dispatch, getState) => {
//     dispatch(appLoading());
//     try {
//       const response = await axios.post(`${apiUrl}/auth/login`, {
//         email,
//         password,
//       });
//       console.log("This is from user thunk", response.data);
//       dispatch(
//         loginSuccess({
//           token: response.data.token,
//           user: response.data.user,
//           space: response.data.space,
//         })
//       );
//       dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
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
//             text: error.response.data.message,
//           })
//         );
//       }
//       dispatch(appDoneLoading());
//     }
//   };
// };

// export const getUserWithStoredToken = () => {
//   return async (dispatch, getState) => {
//     // get token from the state
//     const token = selectToken(getState());

//     // if we have no token, stop
//     if (token === null) return;

//     dispatch(appLoading());
//     try {
//       // if we do have a token,
//       // check wether it is still valid or if it is expired
//       const response = await axios.get(`${apiUrl}/auth/me`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       // token is still valid
//       // console.log("me thunk", response.data);
//       dispatch(
//         tokenStillValid({
//           user: response.data.user,
//           space: response.data.space,
//         })
//       );
//       dispatch(appDoneLoading());
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response.message);
//       } else {
//         console.log(error);
//       }
//       // if we get a 4xx or 5xx response,
//       // get rid of the token by logging out
//       dispatch(logOut());
//       dispatch(appDoneLoading());
//     }
//   };
// };

// export function deleteSpecificStory(id) {
//   return async function thunk(dispatch, getState) {
//     try {
//       dispatch(appLoading());
//       const response = await axios.delete(`${apiUrl}/spaces/story/${id}`);
//       // console.log("This is the delete thunk", response.data);

//       dispatch(deleteStory(id));
//       // const detailSpace = response.data;
//       dispatch(appDoneLoading());
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// }

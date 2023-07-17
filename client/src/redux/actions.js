import axios from "axios";
import { POST_CREATE_USER, CLEAR_MESSAGE } from "./index.js";

export const postCreateUser = (data) => {
  return async (dispatch) => {
    try {
      let response = await axios.post(
        "http://localhost:3001/user/createUser",
        data
      );
      dispatch({ type: POST_CREATE_USER, payload: response.data });
    } catch (error) {
      dispatch({ type: POST_CREATE_USER, payload: error.response.data });
    }
  };
};

export const clearMessage = () => {
  return {
    type: CLEAR_MESSAGE,
  };
};

// export const postCreateUser = (data) => {
//   return {
//     type: "POST_CREATE_USER",
//     payload: data,
//   };
// };

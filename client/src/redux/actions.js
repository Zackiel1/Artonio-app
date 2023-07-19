import axios from "axios";
import { POST_CREATE_USER, CLEAR_MESSAGE, POST_LOGIN } from "./index.js";

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

export const clearMessage = (data) => {
  return {
    type: CLEAR_MESSAGE,
    payload: data,
  };
};

export const postLogin = (data) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:3001/user/login", data)
      .then((response) => {
        dispatch({ type: POST_LOGIN, payload: response.data });
      })
      .catch((err) => window.alert(err.response.data));
    // try {
    //   let response = await axios.post("http://localhost:3001/user/login", data);
    //   dispatch({ type: POST_LOGIN, payload: response.data });
    // } catch (error) {
    //   err => window.alert('Id o Name no exist')
    // }
  };
};

// export const postCreateUser = (data) => {
//   return {
//     type: "POST_CREATE_USER",
//     payload: data,
//   };
// };

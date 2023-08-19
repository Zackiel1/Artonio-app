import axios from "axios";
import {
  POST_CREATE_USER,
  CLEAR_MESSAGE,
  POST_LOGIN,
  PUT_PASS,
  MESSAGE_ERROR,
  RE_LOGIN,
  GET_IMAGES,
} from "./index.js";

export const postCreateUser = (data) => {
  return async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/user/createUser",
        data
      );
      return response.data;
    } catch (error) {
      throw error;
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
        window.localStorage.setItem("userInfo", JSON.stringify(response.data));
        dispatch({ type: POST_LOGIN, payload: response.data });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export const putPass = (data) => {
  return async () => {
    try {
      const response = await axios.put(
        "http://localhost:3001/user/updatePass",
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
};

export const reLogin = (data) => {
  return {
    type: RE_LOGIN,
    payload: data,
  };
};

export const uploadImg = (data) => {
  return async () => {
    try {
      await axios.post("http://localhost:3001/gallery/upload", data);
      //console.log(response);
      return;
    } catch (error) {
      throw error;
    }
  };
};

export const getImg = () => {
  return async (dispatch) => {
    try {
      const images = await axios.get("http://localhost:3001/gallery/searchImg");
      dispatch({ type: GET_IMAGES, payload: images.data });
    } catch (error) {
      throw error;
    }
  };
};

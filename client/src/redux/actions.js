import axios from "axios";
import {
  POST_CREATE_USER,
  CLEAR_MESSAGE,
  POST_LOGIN,
  PUT_PASS,
  MESSAGE_ERROR,
  RE_LOGIN,
  GET_IMAGES,
  POST_FORGET_PASS,
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

export const postForgetPass = (data) => {
  return async () => {
    return await axios
      .post("http://localhost:3001/user/recover", data)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };
};

export const putPass = (data) => {
  console.log(data);
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
      const res = await axios.post(
        "http://localhost:3001/gallery/upload",
        data
      );
      return res;
    } catch (error) {
      throw error;
    }
  };
};

export const getImg = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/gallery/searchImg"
      );

      dispatch({ type: GET_IMAGES, payload: response.data });
    } catch (error) {
      throw error;
    }
  };
};

export const getVerifyToken = (token) => {
  return async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/user/verifyToken", {token: token}
      );

      return response.data.userId;
    } catch (error) {
      throw error;
    }
  };
};

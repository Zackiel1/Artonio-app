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
  SEARCH_USER,
  USE_DISCOUNT,
  ADD_DISCOUNT,
  CLEAR_USER_INFO,
  MESSAGE_SUCCESS,
  RESEND_VERIFY_MESSAJE,
  DELETE_IMG,
} from "./index.js";

export const postCreateUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/user/createUser",
        data
      );
      dispatch({ type: MESSAGE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: MESSAGE_ERROR, payload: error.response.data });
    }
  };
};

export const clearMessage = () => {
  return {
    type: CLEAR_MESSAGE,
    payload: "",
  };
};

export const clearUserInfo = () => {
  return {
    type: CLEAR_USER_INFO,
    payload: false,
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
  return async (dispatch) => {
    return await axios
      .post("http://localhost:3001/user/recover", data)
      .then((response) => {
        dispatch({ type: MESSAGE_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: MESSAGE_ERROR, payload: error.response.data });
      });
  };
};

export const putPass = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/user/updatePass",
        data
      );
      dispatch({ type: MESSAGE_SUCCESS, payload: true });
    } catch (error) {
      console.log(error);
      dispatch({ type: MESSAGE_ERROR, payload: error.response });
    }
  };
};

export const reLogin = () => {
  return {
    type: RE_LOGIN,
    payload: true,
  };
};

export const uploadImg = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/gallery/upload",
        data
      );
      dispatch({ type: MESSAGE_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: MESSAGE_ERROR, payload: error.response });
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
        "http://localhost:3001/user/verifyToken",
        { token: token }
      );
      return response.data.userId;
    } catch (error) {
      throw error;
    }
  };
};

export const searchUser = (email) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/admin/searchUser",
        { email: email }
      );
      dispatch({ type: SEARCH_USER, payload: response.data });
    } catch (error) {
      dispatch({ type: MESSAGE_ERROR, payload: error.response });
    }
  };
};

export const useDiscount = (email, id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        "http://localhost:3001/admin/deleteDiscount",
        {
          headers: {
            email: email,
            id: id,
          },
        }
      );
      dispatch({ type: USE_DISCOUNT, payload: response });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
export const AddDiscount = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/admin/addDiscount",
        data
      );
      console.log(response);
      dispatch({ type: USE_DISCOUNT, payload: response });
    } catch (error) {
      dispatch({ type: MESSAGE_ERROR, payload: error.response });
    }
  };
};

export const resendVerifyMessage = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/user/ResendVerifyMessage",
        data
      );
      dispatch({ type: MESSAGE_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: MESSAGE_ERROR, payload: error.response });
    }
  };
};

export const deleteImg = (nameCloud) => {
  return async (dispatch) => {
    try {
      await axios.delete("http://localhost:3001/gallery/deleteImg", {
        headers: {
          name_cloud: nameCloud,
        },
      });

      dispatch({ type: DELETE_IMG, payload: nameCloud });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const isFavoriteImg = (data) => {
  return async (dispatch) => {
    try {
      let result = await axios.patch(
        "http://localhost:3001/gallery/isFavorite",
        data
      );
      console.log(result);
      //dispatch({ type: DELETE_IMG, payload: nameCloud });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

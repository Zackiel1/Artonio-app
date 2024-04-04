import axios from "axios";
import {
  CLEAR_MESSAGE,
  POST_LOGIN,
  MESSAGE_ERROR,
  RE_LOGIN,
  GET_IMAGES,
  SEARCH_USER,
  USE_DISCOUNT,
  CLEAR_USER_INFO,
  MESSAGE_SUCCESS,
  DELETE_IMG,
} from "./index.js";

const urlBack = import.meta.env.VITE_URL_BACK

export const postCreateUser = (data) => {
  return async (dispatch) => {
    try {
      console.log(urlBack);
      const response = await axios.post(
        `${urlBack}/user/createUser`,
        data
      );
      dispatch({ type: MESSAGE_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
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
      .post(`${urlBack}/user/login`, data)
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
      .post(`${urlBack}/user/recover`, data)
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
    return await axios
      .put(`${urlBack}/user/updatePass`,
      data)
      .then((response) => {
        dispatch({ type: MESSAGE_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: MESSAGE_ERROR, payload: error.response.data });
      });
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
        `${urlBack}/gallery/upload`,
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
        `${urlBack}/gallery/searchImg`
      );
      console.log(response)
      dispatch({ type: GET_IMAGES, payload: response.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const getVerifyToken = (token) => {
  return async () => {
    try {
      const response = await axios.post(
        `${urlBack}/user/verifyToken`,
        { token: token }
      );
      return response.data.userId;
    } catch (error) {
      console.log(error);
      throw error;

    }
  };
};

export const searchUser = (email) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${urlBack}/admin/searchUser`,
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
        `${urlBack}/admin/deleteDiscount`,
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
        `${urlBack}/admin/addDiscount`,
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
        `${urlBack}/user/ResendVerifyMessage`,
        data
      );
      dispatch({ type: MESSAGE_SUCCESS, payload: response });
      console.log(response);
    } catch (error) {
      dispatch({ type: MESSAGE_ERROR, payload: error.response });
    }
  };
};

export const deleteImg = (nameCloud) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${urlBack}/gallery/deleteImg`, {
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
  return async () => {
    try {
      let result = await axios.patch(
        `${urlBack}/gallery/isFavorite`,
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

export const postContact = (data) => {
  return async (dispatch) => {
    try {
      let result = await axios.post(
        `${urlBack}/user/contact`,
        data
      );
      
      dispatch({ type: MESSAGE_SUCCESS, payload: result.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: MESSAGE_ERROR, payload: error.response });
    }
  };
};

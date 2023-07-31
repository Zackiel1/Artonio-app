import {
  POST_CREATE_USER,
  CLEAR_MESSAGE,
  POST_LOGIN,
  RE_LOGIN,
} from "./index.js";

const inicialState = {
  messageSuccess: null,
  messageError: null,
  userInfo: null,
};

const reducer = (state = inicialState, action) => {
  switch (action.type) {
    case POST_CREATE_USER:
      return {
        ...state,
        messageSuccess: action.payload,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        [action.payload]: null,
      };
    case POST_LOGIN:
      return {
        ...state,
        userInfo: action.payload,
      };
    case RE_LOGIN:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;

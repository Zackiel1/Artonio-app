import {
  POST_CREATE_USER,
  CLEAR_MESSAGE,
  POST_LOGIN,
  RE_LOGIN,
  GET_IMAGES,
  SEARCH_USER,
  USE_DISCOUNT,
  ADD_DISCOUNT,
  MESSAGE_ERROR,
  CLEAR_USER_INFO,
  MESSAGE_SUCCESS,
} from "./index.js";

const inicialState = {
  messageSuccess: null,
  messageError: null,
  userInfo: null,
  dataImgs: [],
  tatto: [],
  paint: [],
  searchInfoUser: null,
  
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
        messageSuccess: null,
        messageError: null,
      };
    case CLEAR_USER_INFO:
      return {
        ...state,
        [action.payload]: null,
      };
    case MESSAGE_ERROR:
      return {
        ...state,
        messageError: action.payload,
      };
    case MESSAGE_SUCCESS:
      return {
        ...state,
        messageSuccess: action.payload,
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
    case GET_IMAGES:
      const tattos = action.payload.filter(
        (image) => image.destination === "tatto"
      );
      const paints = action.payload.filter(
        (image) => image.destination === "paint"
      );
      return {
        ...state,
        dataImgs: action.payload,
        tatto: tattos,
        paint: paints,
      };
    case SEARCH_USER:
      return {
        ...state,
        searchInfoUser: action.payload,
      };  
    case USE_DISCOUNT:
    return {
      ...state,
      messageSuccess: action.payload,
    };
    case ADD_DISCOUNT:
    return {
      ...state,
      messageSuccess: action.payload,
    };
    default:
      return { ...state };
  }
};

export default reducer;

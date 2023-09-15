import {
  POST_CREATE_USER,
  CLEAR_MESSAGE,
  POST_LOGIN,
  RE_LOGIN,
  GET_IMAGES,
} from "./index.js";

const inicialState = {
  messageSuccess: null,
  messageError: null,
  userInfo: null,
  dataImgs: [],
  tatto: [],
  paint: [],
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
    default:
      return { ...state };
  }
};

export default reducer;

import { POST_CREATE_USER, CLEAR_MESSAGE, POST_LOGIN } from "./index.js";

const inicialState = {
  messageUser: null,
  sessionToken: null,
};

const reducer = (state = inicialState, action) => {
  switch (action.type) {
    case POST_CREATE_USER:
      return {
        ...state,
        messageUser: action.payload,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        [action.payload]: null,
      };
    case POST_LOGIN:
      return {
        ...state,
        sessionToken: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;

import { POST_CREATE_USER, CLEAR_MESSAGE } from "./index.js";

const inicialState = {
  messageUser: null,
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
        messageUser: null,
      };
    default:
      return { ...state };
  }
};

export default reducer;

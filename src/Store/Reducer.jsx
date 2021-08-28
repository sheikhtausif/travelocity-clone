import { LOGIN_FAILURE, LOGIN_SUCCESS, LOG_OUT } from "./ActionTypes";

const initState = {
  login: false,
  userName: "",
};

export const Authreducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: true,
        userName: action.payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        login: false,
      };
    case LOG_OUT:
      return {
        ...state,
        login: false,
        userName: "",
      };

    default: {
      return state;
    }
  }
};

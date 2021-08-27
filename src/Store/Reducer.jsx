import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./ActionTypes";

const initState = {
  login: false,
  token: "",
};

export const Authreducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: true,
        token: action.payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        login: false,
      };

    default: {
      return state;
    }
  }
};

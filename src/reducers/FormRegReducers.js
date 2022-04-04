export const initialState = {
  name: "",
  email: "",
  password: "",
  conFirmPassword: "",
  error: null,
  PassError: null,
};

export const actionTypes = {
  SET_NAME: "SET_NAME",
  SET_EMAIL: "SET_EMAIL",
  SET_PASSWORD: "SET_PASSWORD",
  SET_CONFIRM_PASSWORD: "SET_CONFIRM_PASSWORD",
  SET_ERROR: "SET_ERROR",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case actionTypes.SET_EMAIL:
      return {
        ...state,
        email: action.payload,
        error: action.payload.includes("@"),
      };
    case actionTypes.SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case actionTypes.SET_CONFIRM_PASSWORD:
      return {
        ...state,
        conFirmPassword: action.payload,
        PassError: state.password === action.payload,
      };

    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

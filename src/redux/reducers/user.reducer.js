import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
} from "../../constants";

export const userReducer = (
  currentState = { loading: true, payload: {} },
  action
) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, payload: action.payload };
    case USER_SIGNIN_FAILURE:
      return { loading: false, error: action.error };
    default:
      return currentState;
  }
};

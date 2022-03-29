import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
} from "../../constants";

import axiosInstance from "../../api";

export const userSigninAction = (requestBody) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
  });
  try {
    const { data } = await axiosInstance.post("/login", requestBody);
    // console.log("data", data.data);
    localStorage.setItem("userInfo", JSON.stringify(data.data));
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      userInfo: data.data,
    });
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAILURE,
      error,
    });
  }
};

export const getTechAction = (userInfo) => async (dispatch) => {
  dispatch({ type: "GET_TECH_REQUEST" });
  console.log("user", userInfo.token);
  try {
    const { data } = await axiosInstance.get("/technology", {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({
      type: "GET_TECH_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_TECH_FAILURE",
      error: error,
    });
  }
};

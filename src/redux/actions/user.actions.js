import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,

  GET_CANDIDATE_REQUEST,
  GET_CANDIDATE_SUCCESS,
  GET_CANDIDATE_FAILURE,

  // GET_SINGLE_CANDIDATE_REQUEST,
  // GET_SINGLE_CANDIDATE_SUCCESS,
  // GET_SINGLE_CANDIDATE_FAILURE,

  DELETE_CANDIDATE_REQUEST,
  DELETE_CANDIDATE_SUCCESS,
  DELETE_CANDIDATE_FAILURE,

  POST_ADD_CANDIDATE_REQUEST,
  POST_ADD_CANDIDATE_SUCCESS,
  POST_ADD_CANDIDATE_FAILURE,


  GET_COURSE_LIST_REQUEST,
  GET_COURSE_LIST_SUCCESS,
  GET_COURSE_LIST_FAILURE,
} from "../../constants";

import axiosInstance from "../../api";
import { async } from "rxjs";


localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElEIjoiam9lYmlkZW4xQGdtYWlsLmNvbSIsImlhdCI6MTY0NzI2MzAxOCwiZXhwIjoxNjU1OTAzMDE4fQ.eNXP8AzmQynLMSkhCfcD4L_EsRuasu7ljBZ0yLr60bc")
const token = localStorage.getItem("token")

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

export const candidatesList = (userInfo) => async (dispatch) => {
  dispatch({ type: GET_CANDIDATE_REQUEST });
  try {
    const { data } = await axiosInstance.get("/candidates", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: GET_CANDIDATE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CANDIDATE_FAILURE,
      error: error,
    });
  }
};

// export const singleCandidate = (userInfo) => async (dispatch) => {
//   dispatch({ type: GET_SINGLE_CANDIDATE_REQUEST });
//   try {
//     const { data } = await axiosInstance.get(
//       "candidate?id=6231d1b097869c6b7c5bc525",
//       {
//         headers: {
//           Authorization: `Bearer ${userInfo.token}`,
//         },
//       }
//     );

//     dispatch({
//       type: GET_SINGLE_CANDIDATE_SUCCESS,
//       payload: data.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_SINGLE_CANDIDATE_FAILURE,
//       error: error,
//     });
//   }
// };



export const deleteCandidate = (userInfo,candidateId) => async (dispatch) => {
  dispatch({ type: DELETE_CANDIDATE_REQUEST });
  try {
    const { data } = await axiosInstance.delete(`/candidate?id=${candidateId}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: DELETE_CANDIDATE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CANDIDATE_FAILURE,
      error: error,
    });
  }
};

export const addCandidate = (userInfo) => async (dispatch) => {
  dispatch({ type: POST_ADD_CANDIDATE_REQUEST });
  console.log("user", userInfo.token);
  try {
    const { data } = await axiosInstance.post("/candidate", {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({
      type: POST_ADD_CANDIDATE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ADD_CANDIDATE_FAILURE,
      error: error,
    });
  }
};


export const courseList = (userInfo) => async (dispatch) => {
  dispatch({ type: GET_COURSE_LIST_REQUEST });
  try {
    const { data } = await axiosInstance.get("/course", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: GET_COURSE_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_COURSE_LIST_FAILURE,
      error: error,
    });
  }
};
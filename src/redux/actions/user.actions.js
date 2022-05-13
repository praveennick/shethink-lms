import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  GET_CANDIDATE_REQUEST,
  GET_CANDIDATE_SUCCESS,
  GET_CANDIDATE_FAILURE,
  GET_TECHNOLOGY_REQUEST,
  GET_TECHNOLOGY_SUCCESS,
  GET_TECHNOLOGY_FAILURE,
  GET_SINGLE_CANDIDATE_REQUEST,
  GET_SINGLE_CANDIDATE_SUCCESS,
  GET_SINGLE_CANDIDATE_FAILURE,
  DELETE_CANDIDATE_REQUEST,
  DELETE_CANDIDATE_SUCCESS,
  DELETE_CANDIDATE_FAILURE,
  POST_ADD_CANDIDATE_REQUEST,
  POST_ADD_CANDIDATE_SUCCESS,
  POST_ADD_CANDIDATE_FAILURE,
  GET_COURSE_LIST_REQUEST,
  GET_COURSE_LIST_SUCCESS,
  GET_COURSE_LIST_FAILURE,
  POST_ADD_COURSE_COMMENT_REQUEST,
  POST_ADD_COURSE_COMMENT_SUCCESS,
  POST_ADD_COURSE_COMMENT_FAILURE,
  GET_VIEW_COURSE_REQUEST,
  GET_VIEW_COURSE_SUCCESS,
  GET_VIEW_COURSE_FAILURE,
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

export const candidatesList = (userInfo) => async (dispatch) => {
  dispatch({ type: GET_CANDIDATE_REQUEST });
  try {
    const { data } = await axiosInstance.get("/candidates?designation=ft", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    console.log("data in actions", data);
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

export const getTechnology = (userInfo) => async (dispatch) => {
  dispatch({ type: GET_TECHNOLOGY_REQUEST });
  try {
    const { data } = await axiosInstance.get("/technology", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    console.log("data in actionsssssssss", data);
    dispatch({
      type: GET_TECHNOLOGY_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TECHNOLOGY_FAILURE,
      error: error,
    });
  }
};

export const candidatesListIntern = (userInfo) => async (dispatch) => {
  dispatch({ type: GET_CANDIDATE_REQUEST });
  try {
    const { data } = await axiosInstance.get("/candidates?designation=intern", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    console.log("data in actions", data);
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

export const singleCandidate = (candidateInfo) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_CANDIDATE_REQUEST });
  try {
    const { data } = await axiosInstance.get(`candidate?${candidateInfo.id}`, {
      headers: {
        Authorization: `Bearer ${candidateInfo.token}`,
      },
    });
    console.log("data", data);
    dispatch({
      type: GET_SINGLE_CANDIDATE_SUCCESS,
      candidateInfo: data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_CANDIDATE_FAILURE,
      error: error,
    });
  }
};

export const deleteCandidate = (userInfo, candidateId) => async (dispatch) => {
  dispatch({ type: DELETE_CANDIDATE_REQUEST });
  try {
    const { data } = await axiosInstance.delete(
      `/candidate?id=${candidateId}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
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

export const addCandidate = (userInfo, details) => async (dispatch) => {
  dispatch({ type: POST_ADD_CANDIDATE_REQUEST });
  try {
    const { data } = await axiosInstance.post("/candidate", details, {
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
        Authorization: `Bearer ${userInfo.token}`,
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

export const addCourseComment = (requestBody, userInfo) => async (dispatch) => {
  console.log(requestBody, "req");
  console.log(userInfo, "user");
  dispatch({
    type: POST_ADD_COURSE_COMMENT_REQUEST,
  });
  console.log({ requestBody });
  try {
    const { data } = await axiosInstance.post("/comment", requestBody, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: POST_ADD_COURSE_COMMENT_SUCCESS,
      commentInfo: data.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ADD_COURSE_COMMENT_FAILURE,
      error: error,
    });
  }
};

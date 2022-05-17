import * as KEY from "../../constants";
import axiosInstance from "../../api";

export const userSigninAction = (requestBody) => async (dispatch) => {
  dispatch({
    type: KEY.USER_SIGNIN_REQUEST,
  });
  try {
    const { data } = await axiosInstance.post("/login", requestBody);
    // console.log("data", data.data);
    localStorage.setItem("userInfo", JSON.stringify(data.data));
    dispatch({
      type: KEY.USER_SIGNIN_SUCCESS,
      userInfo: data.data,
    });
  } catch (error) {
    dispatch({
      type: KEY.USER_SIGNIN_FAILURE,
      error,
    });
  }
};

export const candidatesList = (userInfo) => async (dispatch) => {
  dispatch({ type: KEY.GET_CANDIDATE_REQUEST });
  try {
    const { data } = await axiosInstance.get("/candidates?designation=ft", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    console.log("data in actions", data);
    dispatch({
      type: KEY.GET_CANDIDATE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: KEY.GET_CANDIDATE_FAILURE,
      error: error,
    });
  }
};

export const getTechnology = (userInfo) => async (dispatch) => {
  dispatch({ type: KEY.GET_TECHNOLOGY_REQUEST });
  try {
    const { data } = await axiosInstance.get("/technology", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    console.log("data in actionsssssssss", data);
    dispatch({
      type: KEY.GET_TECHNOLOGY_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: KEY.GET_TECHNOLOGY_FAILURE,
      error: error,
    });
  }
};

export const candidatesListIntern = (userInfo) => async (dispatch) => {
  dispatch({ type: KEY.GET_CANDIDATE_REQUEST });
  try {
    const { data } = await axiosInstance.get("/candidates?designation=intern", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    console.log("data in actions", data);
    dispatch({
      type: KEY.GET_CANDIDATE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: KEY.GET_CANDIDATE_FAILURE,
      error: error,
    });
  }
};

export const singleCandidate = (candidateInfo) => async (dispatch) => {
  dispatch({ type: KEY.GET_SINGLE_CANDIDATE_REQUEST });
  try {
    const { data } = await axiosInstance.get(`candidate?${candidateInfo.id}`, {
      headers: {
        Authorization: `Bearer ${candidateInfo.token}`,
      },
    });
    console.log("data", data);
    dispatch({
      type: KEY.GET_SINGLE_CANDIDATE_SUCCESS,
      candidateInfo: data.data,
    });
  } catch (error) {
    dispatch({
      type: KEY.GET_SINGLE_CANDIDATE_FAILURE,
      error: error,
    });
  }
};

export const deleteCandidate = (userInfo, candidateId) => async (dispatch) => {
  dispatch({ type: KEY.DELETE_CANDIDATE_REQUEST });
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
      type: KEY.DELETE_CANDIDATE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: KEY.DELETE_CANDIDATE_FAILURE,
      error: error,
    });
  }
};

export const addCandidate = (userInfo, details) => async (dispatch) => {
  dispatch({ type: KEY.POST_ADD_CANDIDATE_REQUEST });
  try {
    const { data } = await axiosInstance.post("/candidate", details, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({
      type: KEY.POST_ADD_CANDIDATE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: KEY.POST_ADD_CANDIDATE_FAILURE,
      error: error,
    });
  }
};

export const courseList = (userInfo) => async (dispatch) => {
  dispatch({ type: KEY.GET_COURSE_LIST_REQUEST });
  try {
    const { data } = await axiosInstance.get("/course", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: KEY.GET_COURSE_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: KEY.GET_COURSE_LIST_FAILURE,
      error: error,
    });
  }
};

export const addCourseComment = (requestBody, userInfo) => async (dispatch) => {
  console.log(requestBody, "req");
  console.log(userInfo, "user");
  dispatch({
    type: KEY.POST_ADD_COURSE_COMMENT_REQUEST,
  });
  console.log({ requestBody });
  try {
    const { data } = await axiosInstance.post("/comment", requestBody, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: KEY.POST_ADD_COURSE_COMMENT_SUCCESS,
      commentInfo: data.data,
    });
  } catch (error) {
    dispatch({
      type: KEY.POST_ADD_COURSE_COMMENT_FAILURE,
      error: error,
    });
  }
};

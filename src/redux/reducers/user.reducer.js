import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  GET_CANDIDATE_REQUEST,
  GET_CANDIDATE_SUCCESS,
  GET_CANDIDATE_FAILURE,
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
  
  GET_TECHNOLOGY_REQUEST,
  GET_TECHNOLOGY_SUCCESS,
  GET_TECHNOLOGY_FAILURE,
  } from "../../constants";

export const userReducer = (
  currentState = { loading: true, userInfo: null },
  action
) => {
  console.log("action", action);
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.userInfo };
    case USER_SIGNIN_FAILURE:
      return { loading: false, error: action.error };
    default:
      return currentState;
  }
};

export const getTechnologyReducer = (
  currentState = { loading: true, commentInfo: null },
  action
) => {
  switch (action.type) {
    case GET_TECHNOLOGY_REQUEST:
      return { loading: true };
    case GET_TECHNOLOGY_SUCCESS:
      return { loading: false, commentInfo: action.payload };

    case GET_TECHNOLOGY_FAILURE:
      return { loading: false, error: action.error };
    default:
      return currentState;
  }
};


export const addCommentReducer = (
  currentState = { loading: true, commentInfo: null },
  action
) => {
  switch (action.type) {
    case POST_ADD_COURSE_COMMENT_REQUEST:
      return { loading: true };
    case POST_ADD_COURSE_COMMENT_SUCCESS:
      return { loading: false, commentInfo: action.commentInfo };

    case POST_ADD_COURSE_COMMENT_FAILURE:
      return { loading: false, error: action.error };
    default:
      return currentState;
  }
};

export const candidatesListReducer = (
  currentState = { loading: true, candidatesInfo: null },
  action
) => {
  switch (action.type) {
    case GET_CANDIDATE_REQUEST:
      return { loading: true };
    case GET_CANDIDATE_SUCCESS:
      return { loading: false, candidatesInfo: action.payload };
    case GET_CANDIDATE_FAILURE:
      return { loading: false, error: action.error };
    default:
      return currentState;
  }
};

export const singleCandidateReducer = (
  currentState = { loading: true, candidateInfo: null },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_CANDIDATE_REQUEST:
      return { loading: true };
    case GET_SINGLE_CANDIDATE_SUCCESS:
      return { loading: false, candidateInfo: action.candidateInfo };
    case GET_SINGLE_CANDIDATE_FAILURE:
      return { loading: false, error: action.error };
    default:
      return currentState;
  }
};

export const deleteCandidateReducer = (
  currentState = { loading: true },
  action
) => {
  switch (action.type) {
    case DELETE_CANDIDATE_REQUEST:
      return { loading: true };
    case DELETE_CANDIDATE_SUCCESS:
      return { loading: false };
    case DELETE_CANDIDATE_FAILURE:
      return { loading: false, error: action.error };
    default:
      return currentState;
  }
};

//add cadidate
export const addCandidateReducer = (
  currentState = { loading: true, candidatesInfo: null },
  action
) => {
  switch (action.type) {
    case POST_ADD_CANDIDATE_REQUEST:
      return { loading: true };
    case POST_ADD_CANDIDATE_SUCCESS:
      return { loading: false, candidatesInfo: action.payload };
    case POST_ADD_CANDIDATE_FAILURE:
      return { loading: false, error: action.error };
    default:
      return currentState;
  }
};

export const courseListReducer = (
  currentState = { loading: true, userInfo: null },
  action
) => {
  switch (action.type) {
    case GET_COURSE_LIST_REQUEST:
      return { loading: true };
    case GET_COURSE_LIST_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case GET_COURSE_LIST_FAILURE:
      return { loading: false, error: action.error };
    default:
      return currentState;
  }
};

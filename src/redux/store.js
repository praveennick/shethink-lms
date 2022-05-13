import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import {
  userReducer,
  candidatesListReducer,
  singleCandidateReducer,
  deleteCandidateReducer,
  addCandidateReducer,
  courseListReducer,
  addCommentReducer,
  getTechnologyReducer,
} from "./reducers/user.reducer";

const initialState = {
  userSignin: localStorage.getItem("userInfo")
    ? { userInfo: JSON.parse(localStorage.getItem("userInfo")) }
    : null,
};

const reducers = combineReducers({
  userSignin: userReducer,
  candidatesList: candidatesListReducer,
  singleCandidate: singleCandidateReducer,
  deleteCandidate: deleteCandidateReducer,
  addCandidate: addCandidateReducer,
  courseList: courseListReducer,
  addCourseComment: addCommentReducer,
  getTechnology:getTechnologyReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

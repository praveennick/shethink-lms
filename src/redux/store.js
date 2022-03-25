import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/user.reducer";

const initialState = {
  userSignin: localStorage.getItem("userInfo")
    ? { userInfo: JSON.parse(localStorage.getItem("userInfo")) }
    : null,
};

const reducers = combineReducers({
  userSignin: userReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

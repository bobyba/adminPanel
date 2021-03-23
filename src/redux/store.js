import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleWare from "redux-thunk";
import Home from "./Home";
import appInit from "./initialApp";
import ProfileUser from "./ProfileUser";

let reducers = combineReducers({ ProfileUser, Home, appInit });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
);
export default store;

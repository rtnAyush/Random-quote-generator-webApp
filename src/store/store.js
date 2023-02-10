import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import allReducers from "./reducers/index";

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
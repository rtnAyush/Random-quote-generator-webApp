import getNewQuote from "./newQuoteReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    getNewQuote,
});

export default allReducers;
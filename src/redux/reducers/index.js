import { combineReducers } from "redux";
import HistoryReducer from "./HistoryReducer";
import watchlater_reducer from "./watchlater_reducer";

const rootReducer = combineReducers ( {
    w_reducer : watchlater_reducer,
    H_reducer : HistoryReducer,
})
 export default rootReducer ;
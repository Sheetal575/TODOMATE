import { combineReducers } from "redux";
import { taskOperationReducers } from "./Reducers/reducers";

export const rootReducers = combineReducers({
    taskOperationReducers,
})
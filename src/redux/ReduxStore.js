import { legacy_createStore } from "redux";
import { rootReducers } from "./RootReducers";

export const store = legacy_createStore(
    rootReducers
)
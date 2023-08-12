import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

//slices list
import appReducer from "./slices/app";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  // whiteList: []
  // blackList: []
};

const rootReducer = combineReducers({
  app: appReducer,
});

export { rootPersistConfig, rootReducer };

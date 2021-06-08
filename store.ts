import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import profileSlice from "./slices/profileSlice";

const rootReducer = combineReducers({
  profile: profileSlice,
})

const store = configureStore({
  reducer: rootReducer
});

export default store;
export  type RootState = ReturnType<typeof rootReducer>;
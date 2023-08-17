import storage from "redux-persist/lib/storage";
import envoyReducer from "./slices/envoySlice";
import voteReducer from "./slices/voteSlice";
import ActivitySlice from "./slices/activitySlice";
import blogReducer from "./slices/blogSlice";
import cityReducer from "./slices/citySlice";
import generalReducer from "./slices/generalSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

const persistConfig = {
  key: "azmaa",
  storage,
};

const reducers = combineReducers({
  envoy: envoyReducer,
  vote: voteReducer,
  activity: ActivitySlice,
  blog: blogReducer,
  city: cityReducer,
  general: generalReducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

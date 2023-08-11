import storage from "redux-persist/lib/storage";
import envoyReducer from "./slices/envoySlice";
import voteReducer from "./slices/voteSlice";
import actionReducer from "./slices/actionSlice";
import blogReducer from "./slices/blogSlice";
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
  action: actionReducer,
  blog: blogReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

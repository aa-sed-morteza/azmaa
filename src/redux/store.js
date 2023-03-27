import storage from "redux-persist/lib/storage";
import dataReducer from "./slices/dataSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

const persistConfig = {
  key: "azmaa",
  storage,
};

const reducers = combineReducers({
  messages: dataReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

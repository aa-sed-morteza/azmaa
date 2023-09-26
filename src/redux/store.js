import storage from "redux-persist/lib/storage";
import envoyReducer from "./slices/envoySlice";
import voteReducer from "./slices/voteSlice";
import ActivitySlice from "./slices/activitySlice";
import blogReducer from "./slices/blogSlice";
import cityReducer from "./slices/citySlice";
import filterReducer from "./slices/filterSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";


import isloginreducers from "./slices/isLoginSlice";
import menuOpenSlice from "./slices/menuOpenSlice";
import seTimOutSlice from "./slices/seTimOutSlice";
import setPasswordSlice from "./slices/setPasswordSlice";
import setTokenSlice from "./slices/setTokenSlice";
import setuserDataSlice from "./slices/setuserDataSlice";
import setSignLevelSlice from "./slices/setSignLevelSlice";
import setUserNameSlice from "./slices/setUserNameSlice";
import setRefreshTokenSlice from "./slices/setRefreshTokenSlice";
import addVoteLevelSlice from "./slices/addVoteLevelSlice";
import addSuggestLevelSlice from "./slices/addSuggestLevelSlice";
import addMapLevelSlice from "./slices/addMapLevelSlice";
import addActionLevelSlice from "./slices/addActionLevelSlice";
import setSuggetTypeSlice from "./slices/setSuggetTypeSlice";
import addArticleLevelSlice from "./slices/addArticleLevelSlice";
import setTypeArticleSlice from "./slices/setTypeArticleSlice";
import setContentArticleSlice from "./slices/setContentArticleSlice";
import setImgArticleSlice from "./slices/setImgArticleSlice";
import setSelectEnvoySlice from "./slices/setSelectEnvoySlice";
import setVoteEnvoySlice from "./slices/setVoteEnvoySlice";
import setProvinceSearchSlice from "./slices/setProvinceSearchSlice";
import setCitySearchSlice from "./slices/setCitySearchSlice";
import setImageSlice from "./slices/setImageSlice";



import userTypeReducers from "./slices/userTypeSlice";
import setIDReducers from "./slices/setId";
import activityChoiceReducers from "./slices/activity-choiceSlice";

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
  filter: filterReducer,
  islogin: isloginreducers ,
  ismenuopen: menuOpenSlice ,
  istimeout: seTimOutSlice ,
  password : setPasswordSlice ,
  token: setTokenSlice ,
  userdata: setuserDataSlice ,
  signInLevel : setSignLevelSlice,
  username : setUserNameSlice ,
  refreshTokenstate : setRefreshTokenSlice,
  userType: userTypeReducers,
  userID: setIDReducers,
  userActivity: activityChoiceReducers,
  addVoteLevel: addVoteLevelSlice ,
  addSuggestLevel: addSuggestLevelSlice ,
  mapLevel: addMapLevelSlice ,
  addActionLevel: addActionLevelSlice ,
  suggestType: setSuggetTypeSlice ,
  addArticleLevel: addArticleLevelSlice ,
  typeArticle: setTypeArticleSlice ,
  contentArticle: setContentArticleSlice ,
  imageArticle: setImgArticleSlice ,
  selectEnvoy: setSelectEnvoySlice ,
  voteEnvoy: setVoteEnvoySlice ,
  provinceSearch: setProvinceSearchSlice ,
  setcitySearch: setCitySearchSlice ,
  image : setImageSlice
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

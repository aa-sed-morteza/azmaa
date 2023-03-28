import React, { useReducer, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { BaseBackURL } from "../../constant/api";

const initialState = {
  userName: "",
  userType: "",
  userId: 0,
  sms: "123456",
  timeOut: false,
  firstName: "",
  lastName: "",
  image: "",
  birthDay: "",
  birthPlace: "",
  mobileNumber: "",
  phoneNubmer: "",
  email: "",
  personalCode: "",
  signInLevel: 1,
  addArticleLevel: 1,
  password: "",
  address: "",
  areaName: "",
  commission: "",
  voteNumber: 0,
  activityChoice: [],
  dutieHistory: [],
  typeArticle: "",
  contentArticle: {},
  imageArticle: {},
  documentArticle: {},
  addActionLevel: 1,
  addVoteLevel: 1,
  typeAction: {},
  selectEnvoy: {},
  voteEnvoy: "",
  addSuggestLevel: 1,
  suggestType: "",
  mapLevel: 1,
  provinceSearch: {},
  citySearch: {},
  city: "",
  loggedIn: false,
  token: null,
  refreshToken: null,
};

export const userContext = React.createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ID":
      return { ...state, userId: action.payload };
    case "SET_LOGGED_IN":
      return { ...state, loggedIn: action.payload };
    case "SET_LOGIN_INFO":
      return { ...state, ...action.payload };
    case "SET_USER_DATA":
      return { ...state, ...action.payload };
    case "SET_AREA_NAME":
      return { ...state, areaName: action.payload };
    case "SET_TYPE_USER":
      return { ...state, userType: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_SIGN_LEVEL":
      return { ...state, signInLevel: action.payload };
    case "SET_FNAME":
      return { ...state, firstName: action.payload };
    case "SET_LNAME":
      return { ...state, lastName: action.payload };
    case "SET_USERNAME":
      return { ...state, userName: action.payload };
    case "SET_TIME_OUT":
      return { ...state, timeOut: action.payload };
    case "SET_MOBILEN":
      return { ...state, mobileNumber: action.payload };
    case "SET_PHONEN":
      return { ...state, phoneNubmer: action.payload };
    case "SET_BIRTH_DAY":
      return { ...state, birthDay: action.payload };
    case "SET_BIRTH_PLACE":
      return { ...state, birthPlace: action.payload };
    case "SET_MAIL":
      return { ...state, email: action.payload };
    case "SET_PERSONALCODE":
      return { ...state, personalCode: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SET_COMMISSION":
      return { ...state, commission: action.payload };
    case "SET_VOTE_NUMBER":
      return { ...state, voteNumber: action.payload };
    case "SET_DUTIE_HISTORY":
      return { ...state, dutieHistory: action.payload };
    case "SET_ADD_ARTICLE":
      return { ...state, addArticleLevel: action.payload };
    case "SET_TYPE_ARTICLE":
      return { ...state, typeArticle: action.payload };
    case "SET_CONTENT_ARTICLE":
      return { ...state, contentArticle: action.payload };
    case "SET_ACTIVITY_CHOICE":
      return { ...state, activityChoice: action.payload };
    case "SET_IMG_ARTICLE":
      return { ...state, imageArticle: action.payload };
    case "SET_DOC_ARTICLE":
      return { ...state, documentArticle: action.payload };
    case "SET_ADD_ACT_LEVEL":
      return { ...state, addActionLevel: action.payload };
    case "SET_ADD_VOTE_LEVEL":
      return { ...state, addVoteLevel: action.payload };
    case "SET_TYPE_ACTION":
      return { ...state, typeAction: action.payload };
    case "SET_SELECT_ENVOUY":
      return { ...state, selectEnvoy: action.payload };
    case "SET_VOTE_ENVOY":
      return { ...state, voteEnvoy: action.payload };
    case "SET_SUGGEST_LEVEL":
      return { ...state, addSuggestLevel: action.payload };
    case "SET_SUGGET_TYPE":
      return { ...state, suggestType: action.payload };
    case "SET_MAP_LEVEL":
      return { ...state, mapLevel: action.payload };
    case "SET_PROVINCE_SEARCH":
      return { ...state, provinceSearch: action.payload };
    case "SET_CITY_SEARCH":
      return { ...state, citySearch: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_IMAGE":
      return { ...state, image: action.payload };

    // case "SET_DATA":
    //   return { ...state, ...action.payload };
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "SET_REFRESH_TOKEN":
      return { ...state, refreshToken: action.payload };
    case "CLEAR_DATA":
      return initialState;
    default:
      return { ...state };
  }
};

export const UserState = (props) => {
  //Defining the global state and dispatching fucntion as the ruducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  const refreshToken = () => {
    const data = new FormData();
    data.append("refresh", Cookies.get("refreshToken"));

    let config = {
      method: "post",
      url: `${BaseBackURL}api/token/refresh/`,
      // headers: {
      //   Authorization: `Bearer ${Cookies.get('token')}`,
      // },
      data: data,
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        dispatch({ type: "SET_TOKEN", payload: response.data.access });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    // console.log(Cookies.get("token"));
    if (Cookies.get("token")) {
      // refreshToken();
      // console.log("token");
      dispatch({ type: "SET_TOKEN", payload: Cookies.get("token") });
    }
  }, []);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {props.children}
    </userContext.Provider>
  );
};

const useUser = () => {
  return useContext(userContext);
};
export { useUser };

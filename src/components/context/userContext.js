import React, { useReducer, useContext, useEffect } from "react";

const initialState = {
  userName: "",
  userType: "",
  sms: "123456",
  timeOut: false,
  firstName: "",
  lastName: "",
  // image: "",
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
  dutieHistory: [],
  typeArticle: "",
  contentArticle: {},
  imageArticle: {},
  documentArticle: {},
  addActionLevel: 1,
  typeAction: {},
  selectEnvoy: {},
  voteEnvoy: "",
  addSuggestLevel: 1,
  suggestType: "",
  loggedIn: false,
  // currentPrice: 0,
  // systemDiscount: 20000,
  // balance: 200000,
  // id: 1,

  // hasCart: false,
  // payment: false,
  // confirmOrder: false,
  // token: null,
};

export const userContext = React.createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return { ...state, loggedIn: action.payload };
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
    case "SET_IMG_ARTICLE":
      return { ...state, imageArticle: action.payload };
    case "SET_DOC_ARTICLE":
      return { ...state, documentArticle: action.payload };
    case "SET_ADD_ACT_LEVEL":
      return { ...state, addActionLevel: action.payload };
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
    // case "SET_DATA":
    //   return { ...state, ...action.payload };
    // case "SET_TOKEN":
    //   return { ...state, token: action.payload };
    case "CLEAR_DATA":
      return initialState;
    default:
      return { ...state };
  }
};

export const UserState = (props) => {
  //Defining the global state and dispatching fucntion as the ruducer function
  const [state, dispatch] = useReducer(reducer, initialState);

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

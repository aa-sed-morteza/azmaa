import React, { useReducer, useContext, useEffect } from "react";

const initialState = {
  userName: "",
  sms:"123456",
  timeOut:false,
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
   password: "",
   address: "",
   areaName: "",
   commission: "",
   voteNumber: 0,
   dutieHistory: [],
  // currentPrice: 0,
  // systemDiscount: 20000,
  // balance: 200000,
  // id: 1,
  // loggedIn: false,
  // hasCart: false,
  // payment: false,
  // confirmOrder: false,
  // token: null,
};

export const userContext = React.createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    // case "SET_LOGGED_IN":
    //   return { ...state, loggedIn: action.payload };
    case "SET_AREA_NAME":
      return { ...state, areaName: action.payload };
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
    // case "SET_RECOMMENDATIONS":
    //   return { ...state, recommendations: action.payload };
    // case "SET_SUPPORT":
    //   return { ...state, supports: action.payload };
    // case "SET_BALANCE":
    //   return { ...state, balance: action.payload };
    // case "SET_CART":
    //   return { ...state, cart: action.payload };
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

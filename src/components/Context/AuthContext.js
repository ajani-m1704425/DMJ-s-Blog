import React, { useReducer } from 'react';
import { createContext } from 'react';


export const UserContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "TWIFAIL":
      return { ...state, twiLogin: "fail" };
    case "TWISUCCESS":
      return { ...state, twiLogin: "success" };
    case "TWINULL":
      return { ...state, twiLogin: null };
    // case "MONITOR":
    //   return { ...state, page: "monitor" };
    // case "AUTH":
    //   return { ...state, page: "auth" };
    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    twiLogin: null,
  });

  if (!state.user) {
    const user = JSON.parse(localStorage.getItem("User"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }

  // console.log("States", state);
  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;

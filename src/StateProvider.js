import React, { createContext, useContext, useReducer } from "react";

//prepares the dataLayer
export const StateContext = createContext();

//Wrap app and provde the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information form data layer
export const useStateValue = () => useContext(StateContext);

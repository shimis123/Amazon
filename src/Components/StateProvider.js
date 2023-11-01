// THIS IS ALWAYS COMMON




// setup data layer
// we need this to track the basket
import { createContext, useContext, useReducer } from "react";

// THIS IS DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider
            value={useReducer
                (reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

// This is how we use it in Components
export const useStateValue = () => useContext(StateContext)

// 1. make this file
// 2. make it accessible in index.js
// now import useStateValue to get the basket etc...
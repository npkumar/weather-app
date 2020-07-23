import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import * as constants from "./contants";

// Actions
const SET_UNIT = "SET_UNIT";
const SET_INDEX = "SET_INDEX";

export const ApplicationContext = createContext(null);

const ApplicationProvider = ({ children }) => {
  const initialState = {
    unit: constants.FAHRENHEIT,
    index: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case SET_UNIT: {
        return { ...state, unit: action.payload };
      }
      case SET_INDEX: {
        return { ...state, index: action.payload };
      }
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    application: state,
    setUnit: (unit) => dispatch({ type: SET_UNIT, payload: unit }),
    setIndex: (index) => dispatch({ type: SET_INDEX, payload: index }),
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};

ApplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicationProvider;

import {
  GET_WEATHER_DATA,
  CLEAR_WEATHER_DATA,
  WEATHER_DATA_ERROR,
} from "../actions/types";

const initialState = {
  weather: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_WEATHER_DATA:
      return {
        ...state,
        weather: payload,
        loading: false,
      };
    case CLEAR_WEATHER_DATA:
      return {
        ...state,
        weather: null,
      };
    case WEATHER_DATA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        weather: null,
      };
    default:
      return state;
  }
}

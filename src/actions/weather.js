import api from "../utils/api";
import chunk from "lodash/chunk";
import dayjs from "dayjs";

import {
  GET_WEATHER_DATA,
  CLEAR_WEATHER_DATA,
  WEATHER_DATA_ERROR,
} from "./types";

export const getWeatherData = () => async (dispatch) => {
  dispatch({ type: CLEAR_WEATHER_DATA });

  try {
    const res = await api.get(
      "https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40"
    );

    const { city, list } = res.data;
    const days = chunk(list, 8);
    const daysData = days.map((day) => {
      const date = dayjs.unix(day[0].dt).format("YYYY-MM-DD");
      const tempListKelvin = day.map((data) => parseFloat(data.main.temp));
      const tempListFahrenheit = tempListKelvin.map((data) =>
        parseFloat(((data - 273.15) * (9 / 5) + 32).toFixed(2))
      );
      const tempListCelsius = tempListFahrenheit.map((data) =>
        parseFloat(((5 / 9) * (data - 32)).toFixed(2))
      );
      const avgTempKelvin = parseFloat(
        day
          .reduce((acc, data) => {
            return (acc + data.main.temp) / 2;
          }, 0)
          .toFixed(2)
      );

      const avgTempFahrenheit = parseFloat(
        ((avgTempKelvin - 273.15) * (9 / 5) + 32).toFixed(2)
      );
      const avgTempCelsius = parseFloat(
        ((5 / 9) * (avgTempFahrenheit - 32)).toFixed(2)
      );
      return {
        date,
        avgTempKelvin,
        avgTempFahrenheit,
        avgTempCelsius,
        tempListKelvin,
        tempListFahrenheit,
        tempListCelsius,
      };
    });

    dispatch({
      type: GET_WEATHER_DATA,
      payload: {
        city,
        daysData,
      },
    });
  } catch (err) {
    console.log("err: ", err);
    dispatch({
      type: WEATHER_DATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

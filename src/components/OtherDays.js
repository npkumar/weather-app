import React from "react";
import PropTypes from "prop-types";
import WeatherCard from "./WeatherCard";
import { useApplication } from "../services/Application";
import { Grid } from "@material-ui/core";

const OtherDays = ({ daysData }) => {
  const { application } = useApplication();
  const yesterdayIndex = application.index - 1;
  const tomorrowIndex = application.index + 1;

  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        {yesterdayIndex >= 0 && (
          <WeatherCard
            small
            date={daysData[yesterdayIndex].date}
            avgTempKelvin={daysData[yesterdayIndex].avgTempKelvin}
            avgTempFahrenheit={daysData[yesterdayIndex].avgTempFahrenheit}
            avgTempCelsius={daysData[yesterdayIndex].avgTempCelsius}
            data-testid="yesterday"
          />
        )}
      </Grid>
      <Grid item xs={6}>
        {tomorrowIndex < daysData.length && (
          <WeatherCard
            small
            date={daysData[tomorrowIndex].date}
            avgTempKelvin={daysData[tomorrowIndex].avgTempKelvin}
            avgTempFahrenheit={daysData[tomorrowIndex].avgTempFahrenheit}
            avgTempCelsius={daysData[tomorrowIndex].avgTempCelsius}
            data-testid="tomorrow"
          />
        )}
      </Grid>
    </Grid>
  );
};

OtherDays.propTypes = {
  daysData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      avgTempKelvin: PropTypes.number.isRequired,
      avgTempFahrenheit: PropTypes.number.isRequired,
      avgTempCelsius: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default OtherDays;

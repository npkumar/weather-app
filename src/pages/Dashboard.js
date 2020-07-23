import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getWeatherData } from "../actions/weather";
import WeatherCard from "../components/WeatherCard";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Swiper from "../components/Swiper/Swiper";
import BarChart from "../components/Chart/BarChart";
import Controls from "../components/Controls";
import OtherDays from "../components/OtherDays";
import LoadingCover from "../components/LoadingCover";

const useStyles = makeStyles({
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 16,
  },
  controls: {
    marginTop: 16,
    textAlign: "center",
  },
  pos: {
    marginTop: 16,
  },
});

const Dashboard = ({ getWeatherData, weather: { weather, loading } }) => {
  const classes = useStyles();
  useEffect(() => {
    getWeatherData();
  }, [getWeatherData]);

  if (loading) {
    return <LoadingCover />;
  }

  return (
    <Container maxWidth="sm">
      <Typography component="div" className={classes.title}>
        {weather.city.name}
      </Typography>

      <Typography component="div" className={classes.controls}>
        <Controls />
      </Typography>

      <Typography component="div" className={classes.pos}>
        <Swiper>
          {weather.daysData.map(
            ({ date, avgTempKelvin, avgTempFahrenheit, avgTempCelsius }) => {
              return (
                <WeatherCard
                  key={date}
                  date={date}
                  avgTempKelvin={avgTempKelvin}
                  avgTempFahrenheit={avgTempFahrenheit}
                  avgTempCelsius={avgTempCelsius}
                />
              );
            }
          )}
        </Swiper>
        <OtherDays daysData={weather.daysData} />
      </Typography>

      <Typography component="div" className={classes.pos}>
        <BarChart daysData={weather.daysData} />
      </Typography>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  weather: state.weather,
});

export default connect(mapStateToProps, { getWeatherData })(Dashboard);

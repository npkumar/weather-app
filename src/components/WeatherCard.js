import React from "react";
import PropTypes from "prop-types";
import capitalize from "lodash/capitalize";
import dayjs from "dayjs";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import {
  useApplication,
  KELVIN,
  CELSIUS,
  FAHRENHEIT,
} from "../services/Application";

const useStyles = makeStyles({
  root: {
    marginTop: 16,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    margin: 0,
  },
  smallTitle: {
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
  },
  smallDescription: {
    fontSize: 12,
  },
  dayOfWeek: {
    fontSize: 16,
  },
  smallDayOfWeek: {
    fontSize: 12,
  },
});

const WeatherCard = ({
  small,
  date,
  avgTempKelvin,
  avgTempFahrenheit,
  avgTempCelsius,
  ...otherProps
}) => {
  const classes = useStyles();
  const { application } = useApplication();

  const unitMap = {
    [KELVIN]: avgTempKelvin,
    [FAHRENHEIT]: avgTempFahrenheit,
    [CELSIUS]: avgTempCelsius,
  };

  return (
    <Paper className={classes.root} elevation={3} {...otherProps}>
      <CardContent>
        <Typography
          className={small ? classes.smallTitle : classes.title}
          gutterBottom
          data-testid="date"
        >
          {dayjs(date).format("MMM DD, YYYY")}
        </Typography>
        <Typography
          className={small ? classes.smallDayOfWeek : classes.dayOfWeek}
          gutterBottom
          data-testid="day"
        >
          {dayjs(date).format("dddd")}
        </Typography>
        <Typography
          component="p"
          color="secondary"
          className={small ? classes.smallDescription : classes.description}
          data-testid="unit"
        >
          {unitMap[application.unit]} {capitalize(application.unit)}
        </Typography>
      </CardContent>
    </Paper>
  );
};

WeatherCard.propTypes = {
  date: PropTypes.string.isRequired,
  avgTempKelvin: PropTypes.number.isRequired,
  avgTempFahrenheit: PropTypes.number.isRequired,
  avgTempCelsius: PropTypes.number.isRequired,
  small: PropTypes.bool,
};

WeatherCard.defaultProps = {
  small: false,
};

export default WeatherCard;

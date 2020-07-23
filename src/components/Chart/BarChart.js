import React from "react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";
import capitalize from "lodash/capitalize";
import {
  useApplication,
  KELVIN,
  FAHRENHEIT,
  CELSIUS,
} from "../../services/Application";

const BarChart = ({ daysData }) => {
  const { application } = useApplication();
  const unitMap = {
    [KELVIN]: daysData[application.index].tempListKelvin,
    [FAHRENHEIT]: daysData[application.index].tempListFahrenheit,
    [CELSIUS]: daysData[application.index].tempListCelsius,
  };

  const state = {
    options: {
      theme: {
        mode: "dark",
      },
      xaxis: {
        categories: [
          "00-03",
          "03-06",
          "06-09",
          "09-12",
          "12-15",
          "15-18",
          "18-21",
          "21-24",
        ],
        title: {
          text: `Daily 3 Hour Segments`,
        },
        labels: {
          style: {
            fontSize: "10px",
          },
        },
      },
      yaxis: {
        title: {
          text: capitalize(application.unit),
        },
        decimalsInFloat: 0,
      },
      colors: ["#1976d2"],
      plotOptions: {
        bar: {
          columnWidth: "25%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
    },
    series: [
      {
        name: capitalize(application.unit),
        data: unitMap[application.unit],
      },
    ],
  };
  return <Chart options={state.options} series={state.series} type="bar" />;
};

BarChart.defaultProps = {
  daysData: PropTypes.arrayOf(
    PropTypes.shape({
      tempListKelvin: PropTypes.arrayOf(PropTypes.number),
      tempListFahrenheit: PropTypes.arrayOf(PropTypes.number),
      tempListCelsius: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
};

export default BarChart;

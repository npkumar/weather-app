import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ApplicationContext } from "../services/Application/ApplicationProvider";
import * as constants from "../services/Application/contants";
import WeatherCard from "./WeatherCard";

const value = {
  application: {
    unit: constants.FAHRENHEIT,
  },
};

const props = {
  date: "2020-07-23",
  avgTempKelvin: 300,
  avgTempFahrenheit: 200,
  avgTempCelsius: 100,
};

describe("WeatherCard", () => {
  afterEach(() => cleanup());

  it("renders", () => {
    const { asFragment } = render(
      <ApplicationContext.Provider value={value}>
        <WeatherCard {...props} />
      </ApplicationContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should display date, day and temperature in Fahrenheit by default", () => {
    const { getByTestId } = render(
      <ApplicationContext.Provider value={value}>
        <WeatherCard {...props} />
      </ApplicationContext.Provider>
    );
    expect(getByTestId("date")).toHaveTextContent("Jul 23, 2020");
    expect(getByTestId("day")).toHaveTextContent("Thursday");
    expect(getByTestId("unit")).toHaveTextContent("200 Fahrenheit");
  });

  it("should display date, day and temperature in Celsius if application unit is Celsius", () => {
    const { getByTestId } = render(
      <ApplicationContext.Provider
        value={{ application: { unit: constants.CELSIUS } }}
      >
        <WeatherCard {...props} />
      </ApplicationContext.Provider>
    );
    expect(getByTestId("date")).toHaveTextContent("Jul 23, 2020");
    expect(getByTestId("day")).toHaveTextContent("Thursday");
    expect(getByTestId("unit")).toHaveTextContent("100 Celsius");
  });
});

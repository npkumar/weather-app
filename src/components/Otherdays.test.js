import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ApplicationContext } from "../services/Application/ApplicationProvider";
import OtherDays from "./OtherDays";

const value = {
  application: {
    index: 1,
  },
};

const daysData = [
  {
    date: "2020-07-18",
    avgTempKelvin: 286.45,
    avgTempFahrenheit: 55.94,
    avgTempCelsius: 13.3,
  },
  {
    date: "2020-07-19",
    avgTempKelvin: 288.37,
    avgTempFahrenheit: 59.4,
    avgTempCelsius: 15.22,
  },
  {
    date: "2020-07-20",
    avgTempKelvin: 287.6,
    avgTempFahrenheit: 58.01,
    avgTempCelsius: 14.45,
  },
];

describe("Otherdays", () => {
  afterEach(() => cleanup());

  it("renders", () => {
    const { asFragment } = render(
      <ApplicationContext.Provider value={value}>
        <OtherDays daysData={daysData} />
      </ApplicationContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should display yesterday's and tomorrow's weather cards", () => {
    const { getByTestId } = render(
      <ApplicationContext.Provider value={value}>
        <OtherDays daysData={daysData} />
      </ApplicationContext.Provider>
    );
    expect(getByTestId("yesterday")).toBeDefined();
    expect(getByTestId("tomorrow")).toBeDefined();
  });

  it("should only display tomorrow's weather card, if yesterday is unavailable", () => {
    const { queryByTestId, getByTestId } = render(
      <ApplicationContext.Provider value={{ application: { index: 0 } }}>
        <OtherDays daysData={daysData} />
      </ApplicationContext.Provider>
    );
    expect(queryByTestId("yesterday")).toBeNull();
    expect(getByTestId("tomorrow")).toBeDefined();
  });

  it("should only display yesterday's weather card, if tomorrow is unavailable", () => {
    const { queryByTestId, getByTestId } = render(
      <ApplicationContext.Provider value={{ application: { index: 2 } }}>
        <OtherDays daysData={daysData} />
      </ApplicationContext.Provider>
    );
    expect(getByTestId("yesterday")).toBeDefined();
    expect(queryByTestId("tomorrow")).toBeNull();
  });
});

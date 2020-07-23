import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Controls from "./Controls";
import { ApplicationContext } from "../services/Application/ApplicationProvider";
import * as constants from "../services/Application/contants";

const value = {
  application: {
    unit: constants.FAHRENHEIT,
  },
};

describe("Controls", () => {
  afterEach(() => cleanup());

  it("renders", () => {
    const { asFragment } = render(
      <ApplicationContext.Provider value={value}>
        <Controls />
      </ApplicationContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have 3 radio buttons", () => {
    const { getByTestId } = render(
      <ApplicationContext.Provider value={value}>
        <Controls />
      </ApplicationContext.Provider>
    );
    expect(getByTestId("radioGroup")).toBeInTheDocument();
    expect(getByTestId("fahrenheit")).toHaveTextContent("Fahrenheit");
    expect(getByTestId("celsius")).toHaveTextContent("Celsius");
    expect(getByTestId("kelvin")).toHaveTextContent("Kelvin");
  });

  it("fahrenheit option should be checked by default", () => {
    const { getByDisplayValue } = render(
      <ApplicationContext.Provider value={value}>
        <Controls />
      </ApplicationContext.Provider>
    );
    expect(getByDisplayValue("fahrenheit")).toBeChecked();
  });
});
